/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/contact/route";
exports.ids = ["app/api/contact/route"];
exports.modules = {

/***/ "(rsc)/./app/api/contact/route.js":
/*!**********************************!*\
  !*** ./app/api/contact/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(req) {\n    try {\n        const { nombre, email, asunto, mensaje } = await req.json();\n        // Validaciones básicas\n        if (!nombre || !email || !asunto || !mensaje) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Todos los campos son obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        // Configurar transporter de nodemailer con debug\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            host: 'mail.capres.com.ve',\n            port: 465,\n            secure: true,\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            },\n            debug: true,\n            logger: true\n        });\n        // Verificar conexión antes de enviar\n        try {\n            await transporter.verify();\n            console.log('✅ Conexión SMTP exitosa');\n        } catch (verifyError) {\n            console.error('❌ Error de conexión SMTP:', verifyError);\n            throw verifyError;\n        }\n        // Correo para CAPRES\n        const mailToCapres = {\n            from: process.env.EMAIL_USER,\n            to: 'testmail@capres.com.ve',\n            subject: `Nuevo mensaje de contacto: ${asunto}`,\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;\">\n            📧 Nuevo Mensaje de Contacto\n          </h2>\n\n          <div style=\"background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;\">\n            <h3 style=\"color: #374151; margin-top: 0;\">Información del Remitente:</h3>\n            <p><strong>Nombre:</strong> ${nombre}</p>\n            <p><strong>Correo:</strong> ${email}</p>\n            <p><strong>Asunto:</strong> ${asunto}</p>\n          </div>\n\n          <div style=\"background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;\">\n            <h3 style=\"color: #374151; margin-top: 0;\">Mensaje:</h3>\n            <p style=\"line-height: 1.6; color: #4b5563;\">${mensaje}</p>\n          </div>\n\n          <div style=\"margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;\">\n            <p style=\"margin: 0; font-size: 14px; color: #1e40af;\">\n              <strong>Nota:</strong> Responde directamente a ${email} para contactar al remitente.\n            </p>\n          </div>\n        </div>\n      `\n        };\n        // Correo de confirmación para el usuario\n        const mailToUser = {\n            from: process.env.EMAIL_USER,\n            to: email,\n            subject: 'Confirmación - Mensaje recibido en CAPRES',\n            html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;\">\n          <h2 style=\"color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;\">\n            ✅ Mensaje Recibido - CAPRES\n          </h2>\n\n          <p>Hola <strong>${nombre}</strong>,</p>\n\n          <p>Hemos recibido tu mensaje con el asunto: <strong>\"${asunto}\"</strong></p>\n\n          <div style=\"background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;\">\n            <p style=\"margin: 0; color: #0369a1;\">\n              📞 <strong>¿Necesitas respuesta urgente?</strong><br>\n              Puedes contactarnos directamente al: <strong>+58 0212-7092111</strong>\n            </p>\n          </div>\n\n          <p>Nuestro equipo revisará tu consulta y te responderemos a la brevedad posible.</p>\n\n          <p style=\"color: #6b7280; font-size: 14px;\">\n            <strong>Horario de atención:</strong><br>\n            Lunes a Viernes: 8:00 AM - 3:00 PM\n          </p>\n\n          <hr style=\"border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;\">\n\n          <p style=\"color: #9ca3af; font-size: 12px;\">\n            Este es un correo automático, por favor no responder a esta dirección.\n          </p>\n        </div>\n      `\n        };\n        // Enviar ambos correos\n        await Promise.all([\n            transporter.sendMail(mailToCapres),\n            transporter.sendMail(mailToUser)\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            message: 'Mensaje enviado exitosamente'\n        });\n    } catch (error) {\n        console.error('Error enviando correo:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error interno del servidor'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NvbnRhY3Qvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsZUFBZUUsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNSixJQUFJSyxJQUFJO1FBRXpELHVCQUF1QjtRQUN2QixJQUFJLENBQUNKLFVBQVUsQ0FBQ0MsU0FBUyxDQUFDQyxVQUFVLENBQUNDLFNBQVM7WUFDNUMsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBb0MsR0FDN0M7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGlEQUFpRDtRQUNqRCxNQUFNQyxjQUFjVix1REFBMEIsQ0FBQztZQUM3Q1ksTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsTUFBTTtnQkFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO2dCQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO1lBQzlCO1lBQ0FDLE9BQU87WUFDUEMsUUFBUTtRQUNWO1FBRUEscUNBQXFDO1FBQ3JDLElBQUk7WUFDRixNQUFNYixZQUFZYyxNQUFNO1lBQ3hCQyxRQUFRQyxHQUFHLENBQUM7UUFDZCxFQUFFLE9BQU9DLGFBQWE7WUFDcEJGLFFBQVFqQixLQUFLLENBQUMsNkJBQTZCbUI7WUFDM0MsTUFBTUE7UUFDUjtRQUVBLHFCQUFxQjtRQUNyQixNQUFNQyxlQUFlO1lBQ25CQyxNQUFNWixRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDNUJXLElBQUk7WUFDSkMsU0FBUyxDQUFDLDJCQUEyQixFQUFFMUIsUUFBUTtZQUMvQzJCLE1BQU0sQ0FBQzs7Ozs7Ozs7d0NBUTJCLEVBQUU3QixPQUFPO3dDQUNULEVBQUVDLE1BQU07d0NBQ1IsRUFBRUMsT0FBTzs7Ozs7eURBS1EsRUFBRUMsUUFBUTs7Ozs7NkRBS04sRUFBRUYsTUFBTTs7OztNQUkvRCxDQUFDO1FBQ0g7UUFFQSx5Q0FBeUM7UUFDekMsTUFBTTZCLGFBQWE7WUFDakJKLE1BQU1aLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QlcsSUFBSTFCO1lBQ0oyQixTQUFTO1lBQ1RDLE1BQU0sQ0FBQzs7Ozs7OzBCQU1hLEVBQUU3QixPQUFPOzsrREFFNEIsRUFBRUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXNCbEUsQ0FBQztRQUNIO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU02QixRQUFRQyxHQUFHLENBQUM7WUFDaEJ6QixZQUFZMEIsUUFBUSxDQUFDUjtZQUNyQmxCLFlBQVkwQixRQUFRLENBQUNIO1NBQ3RCO1FBRUQsT0FBT2xDLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFDdkI4QixTQUFTO1lBQ1RDLFNBQVM7UUFDWDtJQUNGLEVBQUUsT0FBTzlCLE9BQU87UUFDZGlCLFFBQVFqQixLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPVCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQTZCLEdBQ3RDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVkZ2FyIEogUm9qYXMgTFxcZGV2XFxjYXByZXMtd2ViXFxhcHBcXGFwaVxcY29udGFjdFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbm9tYnJlLCBlbWFpbCwgYXN1bnRvLCBtZW5zYWplIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgLy8gVmFsaWRhY2lvbmVzIGLDoXNpY2FzXG4gICAgaWYgKCFub21icmUgfHwgIWVtYWlsIHx8ICFhc3VudG8gfHwgIW1lbnNhamUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ1RvZG9zIGxvcyBjYW1wb3Mgc29uIG9ibGlnYXRvcmlvcycgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENvbmZpZ3VyYXIgdHJhbnNwb3J0ZXIgZGUgbm9kZW1haWxlciBjb24gZGVidWdcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIGhvc3Q6ICdtYWlsLmNhcHJlcy5jb20udmUnLFxuICAgICAgcG9ydDogNDY1LFxuICAgICAgc2VjdXJlOiB0cnVlLFxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9QQVNTLFxuICAgICAgfSxcbiAgICAgIGRlYnVnOiB0cnVlLCAvLyBQYXJhIHZlciBtw6FzIGRldGFsbGVzIGRlbCBlcnJvclxuICAgICAgbG9nZ2VyOiB0cnVlLCAvLyBQYXJhIGxvZ2dpbmcgZGV0YWxsYWRvXG4gICAgfSk7XG5cbiAgICAvLyBWZXJpZmljYXIgY29uZXhpw7NuIGFudGVzIGRlIGVudmlhclxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci52ZXJpZnkoKTtcbiAgICAgIGNvbnNvbGUubG9nKCfinIUgQ29uZXhpw7NuIFNNVFAgZXhpdG9zYScpO1xuICAgIH0gY2F0Y2ggKHZlcmlmeUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3IgZGUgY29uZXhpw7NuIFNNVFA6JywgdmVyaWZ5RXJyb3IpO1xuICAgICAgdGhyb3cgdmVyaWZ5RXJyb3I7XG4gICAgfVxuXG4gICAgLy8gQ29ycmVvIHBhcmEgQ0FQUkVTXG4gICAgY29uc3QgbWFpbFRvQ2FwcmVzID0ge1xuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUixcbiAgICAgIHRvOiAndGVzdG1haWxAY2FwcmVzLmNvbS52ZScsXG4gICAgICBzdWJqZWN0OiBgTnVldm8gbWVuc2FqZSBkZSBjb250YWN0bzogJHthc3VudG99YCxcbiAgICAgIGh0bWw6IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgbWF4LXdpZHRoOiA2MDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMxZTQwYWY7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWU0MGFmOyBwYWRkaW5nLWJvdHRvbTogMTBweDtcIj5cbiAgICAgICAgICAgIPCfk6cgTnVldm8gTWVuc2FqZSBkZSBDb250YWN0b1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYzsgcGFkZGluZzogMjBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBtYXJnaW46IDIwcHggMDtcIj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT1cImNvbG9yOiAjMzc0MTUxOyBtYXJnaW4tdG9wOiAwO1wiPkluZm9ybWFjacOzbiBkZWwgUmVtaXRlbnRlOjwvaDM+XG4gICAgICAgICAgICA8cD48c3Ryb25nPk5vbWJyZTo8L3N0cm9uZz4gJHtub21icmV9PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5Db3JyZW86PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5Bc3VudG86PC9zdHJvbmc+ICR7YXN1bnRvfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBwYWRkaW5nOiAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViOyBib3JkZXItcmFkaXVzOiA4cHg7XCI+XG4gICAgICAgICAgICA8aDMgc3R5bGU9XCJjb2xvcjogIzM3NDE1MTsgbWFyZ2luLXRvcDogMDtcIj5NZW5zYWplOjwvaDM+XG4gICAgICAgICAgICA8cCBzdHlsZT1cImxpbmUtaGVpZ2h0OiAxLjY7IGNvbG9yOiAjNGI1NTYzO1wiPiR7bWVuc2FqZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDsgcGFkZGluZzogMTVweDsgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZTsgYm9yZGVyLXJhZGl1czogOHB4O1wiPlxuICAgICAgICAgICAgPHAgc3R5bGU9XCJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMxZTQwYWY7XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Tm90YTo8L3N0cm9uZz4gUmVzcG9uZGUgZGlyZWN0YW1lbnRlIGEgJHtlbWFpbH0gcGFyYSBjb250YWN0YXIgYWwgcmVtaXRlbnRlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfTtcblxuICAgIC8vIENvcnJlbyBkZSBjb25maXJtYWNpw7NuIHBhcmEgZWwgdXN1YXJpb1xuICAgIGNvbnN0IG1haWxUb1VzZXIgPSB7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgdG86IGVtYWlsLFxuICAgICAgc3ViamVjdDogJ0NvbmZpcm1hY2nDs24gLSBNZW5zYWplIHJlY2liaWRvIGVuIENBUFJFUycsXG4gICAgICBodG1sOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IG1heC13aWR0aDogNjAwcHg7IG1hcmdpbjogMCBhdXRvO1wiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMWU0MGFmOyBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFlNDBhZjsgcGFkZGluZy1ib3R0b206IDEwcHg7XCI+XG4gICAgICAgICAgICDinIUgTWVuc2FqZSBSZWNpYmlkbyAtIENBUFJFU1xuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICA8cD5Ib2xhIDxzdHJvbmc+JHtub21icmV9PC9zdHJvbmc+LDwvcD5cblxuICAgICAgICAgIDxwPkhlbW9zIHJlY2liaWRvIHR1IG1lbnNhamUgY29uIGVsIGFzdW50bzogPHN0cm9uZz5cIiR7YXN1bnRvfVwiPC9zdHJvbmc+PC9wPlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7IHBhZGRpbmc6IDIwcHg7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luOiAyMHB4IDA7XCI+XG4gICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbjogMDsgY29sb3I6ICMwMzY5YTE7XCI+XG4gICAgICAgICAgICAgIPCfk54gPHN0cm9uZz7Cv05lY2VzaXRhcyByZXNwdWVzdGEgdXJnZW50ZT88L3N0cm9uZz48YnI+XG4gICAgICAgICAgICAgIFB1ZWRlcyBjb250YWN0YXJub3MgZGlyZWN0YW1lbnRlIGFsOiA8c3Ryb25nPis1OCAwMjEyLTcwOTIxMTE8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxwPk51ZXN0cm8gZXF1aXBvIHJldmlzYXLDoSB0dSBjb25zdWx0YSB5IHRlIHJlc3BvbmRlcmVtb3MgYSBsYSBicmV2ZWRhZCBwb3NpYmxlLjwvcD5cblxuICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICM2YjcyODA7IGZvbnQtc2l6ZTogMTRweDtcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+SG9yYXJpbyBkZSBhdGVuY2nDs246PC9zdHJvbmc+PGJyPlxuICAgICAgICAgICAgTHVuZXMgYSBWaWVybmVzOiA4OjAwIEFNIC0gMzowMCBQTVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxociBzdHlsZT1cImJvcmRlcjogbm9uZTsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU3ZWI7IG1hcmdpbjogMzBweCAwO1wiPlxuXG4gICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzljYTNhZjsgZm9udC1zaXplOiAxMnB4O1wiPlxuICAgICAgICAgICAgRXN0ZSBlcyB1biBjb3JyZW8gYXV0b23DoXRpY28sIHBvciBmYXZvciBubyByZXNwb25kZXIgYSBlc3RhIGRpcmVjY2nDs24uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgfTtcblxuICAgIC8vIEVudmlhciBhbWJvcyBjb3JyZW9zXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbFRvQ2FwcmVzKSxcbiAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxUb1VzZXIpLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAnTWVuc2FqZSBlbnZpYWRvIGV4aXRvc2FtZW50ZScsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZW52aWFuZG8gY29ycmVvOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRXJyb3IgaW50ZXJubyBkZWwgc2Vydmlkb3InIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibm9kZW1haWxlciIsIlBPU1QiLCJyZXEiLCJub21icmUiLCJlbWFpbCIsImFzdW50byIsIm1lbnNhamUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInBhc3MiLCJFTUFJTF9QQVNTIiwiZGVidWciLCJsb2dnZXIiLCJ2ZXJpZnkiLCJjb25zb2xlIiwibG9nIiwidmVyaWZ5RXJyb3IiLCJtYWlsVG9DYXByZXMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsIm1haWxUb1VzZXIiLCJQcm9taXNlIiwiYWxsIiwic2VuZE1haWwiLCJzdWNjZXNzIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/contact/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/contact/route.js */ \"(rsc)/./app/api/contact/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/contact/route\",\n        pathname: \"/api/contact\",\n        filename: \"route\",\n        bundlePath: \"app/api/contact/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Edgar J Rojas L\\\\dev\\\\capres-web\\\\app\\\\api\\\\contact\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_contact_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjb250YWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjb250YWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY29udGFjdCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcY29udGFjdFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY29udGFjdC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NvbnRhY3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NvbnRhY3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxFZGdhciBKIFJvamFzIExcXFxcZGV2XFxcXGNhcHJlcy13ZWJcXFxcYXBwXFxcXGFwaVxcXFxjb250YWN0XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcontact%2Froute&page=%2Fapi%2Fcontact%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcontact%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();