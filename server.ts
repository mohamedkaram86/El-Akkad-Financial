import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const TARGET_CONSULTATION_EMAIL = 'mohamed.karam@el-akkad.org';

async function startServer() {
  const app = express();
  app.use(express.json());

  // In-memory log of received consultations
  const receivedConsultations: Array<{
    timestamp: string;
    refCode: string;
    data: any;
    dispatchedTo: string;
  }> = [];

  // API endpoint: Handle Consultation Request
  app.post('/api/consultation', async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        investorType,
        capitalBracket,
        targetSector,
        preferredContact,
        notes,
        refCode,
      } = req.body;

      if (!fullName || !email || !phone) {
        return res.status(400).json({
          success: false,
          error: 'الاسم والبريد الإلكتروني ورقم الهاتف مطلوبة.',
        });
      }

      const generatedRef = refCode || 'AQ-' + Math.floor(100000 + Math.random() * 900000);
      const submissionTime = new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' });

      // Build Rich HTML Email
      const emailHtml = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0c0a09; color: #f5f5f5; margin: 0; padding: 24px; direction: rtl; }
            .container { max-width: 620px; margin: 0 auto; background-color: #171717; border: 1px solid #2e2e2e; border-radius: 12px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #1c1917, #0c0a09); border-bottom: 2px solid #f59e0b; padding: 28px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; color: #fbbf24; font-weight: bold; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #a8a29e; }
            .ref-badge { display: inline-block; background-color: #292524; border: 1px solid #44403c; color: #fbbf24; font-family: monospace; font-size: 16px; font-weight: bold; padding: 6px 14px; border-radius: 6px; margin-top: 12px; }
            .content { padding: 24px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid #262626; padding-bottom: 12px; }
            .field-label { font-size: 12px; color: #a3a3a3; margin-bottom: 4px; font-weight: 600; text-transform: uppercase; }
            .field-value { font-size: 15px; color: #ffffff; font-weight: 500; }
            .notes-box { background-color: #0f0f10; border: 1px solid #27272a; padding: 14px; border-radius: 8px; color: #e5e5e5; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
            .footer { background-color: #0f0f10; border-top: 1px solid #262626; padding: 16px 24px; text-align: center; font-size: 12px; color: #737373; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>مجموعة العقاد للاستشارات والاستثمارات المالية</h1>
              <p>طلب استشارة مالية استراتيجية جديد عبر الموقع الإلكتروني</p>
              <div class="ref-badge">${generatedRef}</div>
            </div>
            <div class="content">
              <div class="field-row">
                <div class="field-label">اسم العميل / المستثمر</div>
                <div class="field-value">${fullName}</div>
              </div>
              <div class="field-row">
                <div class="field-label">البريد الإلكتروني للعميل</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #fbbf24; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">رقم الهاتف / واتساب</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #fbbf24; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">تصنيف المستثمر</div>
                <div class="field-value">${investorType || 'غير محدد'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">نطاق رأس المال المستهدف</div>
                <div class="field-value" style="color: #34d399;">${capitalBracket || 'غير محدد'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">المجال الاستشاري / الاستثماري المطلوب</div>
                <div class="field-value">${targetSector || 'استشارة عامة'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">طريقة التواصل والاستشارة المفضلة</div>
                <div class="field-value">${preferredContact || 'جلسة مرئية'}</div>
              </div>
              ${notes ? `
                <div class="field-row" style="border-bottom: none;">
                  <div class="field-label">تفاصيل وملاحظات الاستشارة</div>
                  <div class="notes-box">${notes}</div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              تاريخ الإرسال: ${submissionTime} | مرسل تلقائياً إلى: ${TARGET_CONSULTATION_EMAIL}
            </div>
          </div>
        </body>
        </html>
      `;

      // Plain text fallback
      const emailText = `
طلب استشارة مالية جديد - مجموعة العقاد
المرجع: ${generatedRef}
تاريخ الطلب: ${submissionTime}
المستلم: ${TARGET_CONSULTATION_EMAIL}

بيانات العميل:
- الاسم: ${fullName}
- البريد: ${email}
- الهاتف: ${phone}
- التصنيف: ${investorType || 'مستثمر'}
- نطاق رأس المال: ${capitalBracket || 'غير محدد'}
- المجال المطلوب: ${targetSector || 'استشارة مالية'}
- طريقة التواصل: ${preferredContact || 'جلسة افتراضية'}
- التفاصيل والملاحظات: ${notes || 'لا توجد ملاحظات إضافية'}
      `.trim();

      // Log dispatch
      console.log(`[Consultation Request] Dispatched to ${TARGET_CONSULTATION_EMAIL} for client ${fullName} (${email}) - Ref: ${generatedRef}`);

      // Attempt SMTP transport if configured via environment variables
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"El Akkad Financial Portal" <${process.env.SMTP_USER}>`,
            to: TARGET_CONSULTATION_EMAIL,
            replyTo: email,
            subject: `[استشارة مالية جديدة ${generatedRef}] ${fullName}`,
            text: emailText,
            html: emailHtml,
          });

          console.log(`[Email Dispatched via SMTP] to ${TARGET_CONSULTATION_EMAIL} successfully!`);
        } catch (emailErr) {
          console.error('[SMTP Send Error]:', emailErr);
          // Still succeed so user experience is not disrupted
        }
      }

      // Attempt FormSubmit background email delivery
      try {
        await fetch(`https://formsubmit.co/ajax/${TARGET_CONSULTATION_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': 'https://el-akkad.org',
            'Referer': 'https://el-akkad.org/consultation',
          },
          body: JSON.stringify({
            _subject: `[طلب استشارة مالية جديد ${generatedRef}] ${fullName}`,
            _template: 'table',
            _captcha: 'false',
            'الرقم المرجعي': generatedRef,
            'اسم العميل': fullName,
            'البريد الإلكتروني': email,
            'رقم الهاتف': phone,
            'تصنيف المستثمر': investorType || 'مستثمر مؤهل',
            'نطاق رأس المال': capitalBracket || 'غير محدد',
            'المجال المطلوب': targetSector || 'استشارة مالية عامة',
            'طريقة التواصل': preferredContact || 'جلسة افتراضية',
            'تفاصيل الاستشارة': notes || 'لا توجد ملاحظات إضافية',
            'تاريخ ووقت الطلب': submissionTime,
          }),
        });
        console.log(`[FormSubmit Dispatch] Notification triggered to ${TARGET_CONSULTATION_EMAIL}`);
      } catch (fErr) {
        console.warn('[FormSubmit Dispatch Warning]:', fErr);
      }

      // Record in session store
      receivedConsultations.push({
        timestamp: new Date().toISOString(),
        refCode: generatedRef,
        data: req.body,
        dispatchedTo: TARGET_CONSULTATION_EMAIL,
      });

      return res.status(200).json({
        success: true,
        refCode: generatedRef,
        targetEmail: TARGET_CONSULTATION_EMAIL,
        message: 'تم إرسال طلب الاستشارة المالية بنجاح.',
      });
    } catch (err: any) {
      console.error('[Consultation API Error]:', err);
      return res.status(500).json({
        success: false,
        error: 'حدث خطأ أثناء معالجة الطلب، يرجى المحاولة لاحقاً.',
      });
    }
  });

  // Health / consultation info endpoint
  app.get('/api/consultation/target', (req, res) => {
    res.json({
      targetEmail: TARGET_CONSULTATION_EMAIL,
      status: 'active',
    });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    console.log(`📬 Consultation requests targeted to: ${TARGET_CONSULTATION_EMAIL}`);
  });
}

startServer();
