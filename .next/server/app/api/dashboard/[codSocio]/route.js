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
exports.id = "app/api/dashboard/[codSocio]/route";
exports.ids = ["app/api/dashboard/[codSocio]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/dashboard/[codSocio]/route.js":
/*!***********************************************!*\
  !*** ./app/api/dashboard/[codSocio]/route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api/handler */ \"(rsc)/./lib/api/handler.js\");\n/* harmony import */ var _lib_api_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/api/error */ \"(rsc)/./lib/api/error.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db/index.js\");\n/* harmony import */ var _lib_db_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db/schema */ \"(rsc)/./lib/db/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/alias-cf8e03cd.mjs\");\n// /app/api/dashboard/[codSocio]/route.js\n\n\n\n\n\n// Función auxiliar para convertir valores a número\nfunction parseDecimal(value) {\n    if (value === null || value === undefined || value === '') return null;\n    const number = parseFloat(value);\n    return isNaN(number) ? null : number;\n}\nasync function handleGetDashboard(req) {\n    try {\n        // Extraer codSocio de la URL\n        const url = new URL(req.url);\n        const path = url.pathname; // \"/api/dashboard/12345678\"\n        const codSocio = path.split('/').pop(); // Extrae el último segmento\n        console.log('🔍 [API] Buscando socio con codSocio:', codSocio);\n        if (!codSocio) {\n            throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Código de socio no proporcionado', {\n                code: 'MISSING_SOCIO',\n                status: 400\n            });\n        }\n        // Verificar conexión a la base de datos\n        if (!_lib_db__WEBPACK_IMPORTED_MODULE_2__.db) {\n            throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Base de datos no conectada', {\n                code: 'DB_ERROR',\n                status: 500\n            });\n        }\n        // Buscar socio\n        const [socio] = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.socios).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.F)(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.socios.CodSocio, codSocio));\n        console.log('👤 [API] Socio encontrado:', socio);\n        if (!socio) {\n            throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Socio no encontrado', {\n                code: 'SOCIO_NOT_FOUND',\n                status: 404\n            });\n        }\n        // Buscar haberes\n        const [haber] = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.haberes).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.F)(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.haberes.codSocio, codSocio));\n        console.log('💰 [API] Haberes encontrados:', haber);\n        // Buscar TODOS los préstamos del socio (ordenados por fecha)\n        const prestamosList = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.select().from(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.prestamos).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.F)(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.prestamos.codSocio, codSocio)).orderBy(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.prestamos.fechaPrest, 'desc');\n        console.log('🏦 [API] Préstamos encontrados:', prestamosList);\n        // Convertir campos numéricos a float\n        const haberesParsed = haber ? {\n            codSocio: haber.codSocio,\n            aporteS: parseDecimal(haber.aporteS),\n            aporteP: parseDecimal(haber.aporteP),\n            aporteV: parseDecimal(haber.aporteV),\n            retiroH: parseDecimal(haber.retiroH),\n            totalH: parseDecimal(haber.totalH)\n        } : null;\n        const prestamosParsed = prestamosList.map((p)=>({\n                id: p.id,\n                codSocio: p.codSocio,\n                tipoPrest: p.tipoPrest,\n                fechaPrest: p.fechaPrest,\n                montoPrest: parseDecimal(p.montoPrest),\n                saldoPrest: parseDecimal(p.saldoPrest)\n            }));\n        // Devolver respuesta JSON\n        return new Response(JSON.stringify({\n            socio,\n            haberes: haberesParsed,\n            prestamos: prestamosParsed\n        }), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('❌ [API] Error en handleGetDashboard:', error);\n        throw error;\n    }\n}\nconst GET = (0,_lib_api_handler__WEBPACK_IMPORTED_MODULE_0__.withErrorHandler)(handleGetDashboard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Rhc2hib2FyZC9bY29kU29jaW9dL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlDQUF5QztBQUVZO0FBQ1Y7QUFDYjtBQUMrQjtBQUM1QjtBQUVqQyxtREFBbUQ7QUFDbkQsU0FBU08sYUFBYUMsS0FBSztJQUN6QixJQUFJQSxVQUFVLFFBQVFBLFVBQVVDLGFBQWFELFVBQVUsSUFBSSxPQUFPO0lBQ2xFLE1BQU1FLFNBQVNDLFdBQVdIO0lBQzFCLE9BQU9JLE1BQU1GLFVBQVUsT0FBT0E7QUFDaEM7QUFFQSxlQUFlRyxtQkFBbUJDLEdBQUc7SUFDbkMsSUFBSTtRQUNGLDZCQUE2QjtRQUM3QixNQUFNQyxNQUFNLElBQUlDLElBQUlGLElBQUlDLEdBQUc7UUFDM0IsTUFBTUUsT0FBT0YsSUFBSUcsUUFBUSxFQUFFLDRCQUE0QjtRQUN2RCxNQUFNQyxXQUFXRixLQUFLRyxLQUFLLENBQUMsS0FBS0MsR0FBRyxJQUFJLDRCQUE0QjtRQUVwRUMsUUFBUUMsR0FBRyxDQUFDLHlDQUF5Q0o7UUFFckQsSUFBSSxDQUFDQSxVQUFVO1lBQ2IsTUFBTSxJQUFJbEIsb0RBQVFBLENBQUMsb0NBQW9DO2dCQUNyRHVCLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjtRQUNGO1FBRUEsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQ3ZCLHVDQUFFQSxFQUFFO1lBQ1AsTUFBTSxJQUFJRCxvREFBUUEsQ0FBQyw4QkFBOEI7Z0JBQy9DdUIsTUFBTTtnQkFDTkMsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxlQUFlO1FBQ2YsTUFBTSxDQUFDQyxNQUFNLEdBQUcsTUFBTXhCLHVDQUFFQSxDQUNyQnlCLE1BQU0sR0FDTkMsSUFBSSxDQUFDekIsa0RBQU1BLEVBQ1gwQixLQUFLLENBQUN2Qiw4Q0FBRUEsQ0FBQ0gsa0RBQU1BLENBQUMyQixRQUFRLEVBQUVYO1FBRTdCRyxRQUFRQyxHQUFHLENBQUMsOEJBQThCRztRQUUxQyxJQUFJLENBQUNBLE9BQU87WUFDVixNQUFNLElBQUl6QixvREFBUUEsQ0FBQyx1QkFBdUI7Z0JBQ3hDdUIsTUFBTTtnQkFDTkMsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxpQkFBaUI7UUFDakIsTUFBTSxDQUFDTSxNQUFNLEdBQUcsTUFBTTdCLHVDQUFFQSxDQUNyQnlCLE1BQU0sR0FDTkMsSUFBSSxDQUFDeEIsbURBQU9BLEVBQ1p5QixLQUFLLENBQUN2Qiw4Q0FBRUEsQ0FBQ0YsbURBQU9BLENBQUNlLFFBQVEsRUFBRUE7UUFFOUJHLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNRO1FBRTdDLDZEQUE2RDtRQUM3RCxNQUFNQyxnQkFBZ0IsTUFBTTlCLHVDQUFFQSxDQUMzQnlCLE1BQU0sR0FDTkMsSUFBSSxDQUFDdkIscURBQVNBLEVBQ2R3QixLQUFLLENBQUN2Qiw4Q0FBRUEsQ0FBQ0QscURBQVNBLENBQUNjLFFBQVEsRUFBRUEsV0FDN0JjLE9BQU8sQ0FBQzVCLHFEQUFTQSxDQUFDNkIsVUFBVSxFQUFFO1FBRWpDWixRQUFRQyxHQUFHLENBQUMsbUNBQW1DUztRQUUvQyxxQ0FBcUM7UUFDckMsTUFBTUcsZ0JBQWdCSixRQUNsQjtZQUNFWixVQUFVWSxNQUFNWixRQUFRO1lBQ3hCaUIsU0FBUzdCLGFBQWF3QixNQUFNSyxPQUFPO1lBQ25DQyxTQUFTOUIsYUFBYXdCLE1BQU1NLE9BQU87WUFDbkNDLFNBQVMvQixhQUFhd0IsTUFBTU8sT0FBTztZQUNuQ0MsU0FBU2hDLGFBQWF3QixNQUFNUSxPQUFPO1lBQ25DQyxRQUFRakMsYUFBYXdCLE1BQU1TLE1BQU07UUFDbkMsSUFDQTtRQUVKLE1BQU1DLGtCQUFrQlQsY0FBY1UsR0FBRyxDQUFDLENBQUNDLElBQU87Z0JBQ2hEQyxJQUFJRCxFQUFFQyxFQUFFO2dCQUNSekIsVUFBVXdCLEVBQUV4QixRQUFRO2dCQUNwQjBCLFdBQVdGLEVBQUVFLFNBQVM7Z0JBQ3RCWCxZQUFZUyxFQUFFVCxVQUFVO2dCQUN4QlksWUFBWXZDLGFBQWFvQyxFQUFFRyxVQUFVO2dCQUNyQ0MsWUFBWXhDLGFBQWFvQyxFQUFFSSxVQUFVO1lBQ3ZDO1FBRUEsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSUMsU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1lBQ2J4QjtZQUNBdEIsU0FBUytCO1lBQ1Q5QixXQUFXb0M7UUFDYixJQUNBO1lBQ0VoQixRQUFRO1lBQ1IwQixTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUVKLEVBQUUsT0FBT0MsT0FBTztRQUNkOUIsUUFBUThCLEtBQUssQ0FBQyx3Q0FBd0NBO1FBQ3RELE1BQU1BO0lBQ1I7QUFDRjtBQUVPLE1BQU1DLE1BQU1yRCxrRUFBZ0JBLENBQUNhLG9CQUFvQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFZGdhciBKIFJvamFzIExcXGRldlxcY2FwcmVzLXdlYlxcYXBwXFxhcGlcXGRhc2hib2FyZFxcW2NvZFNvY2lvXVxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2FwcC9hcGkvZGFzaGJvYXJkL1tjb2RTb2Npb10vcm91dGUuanNcclxuXHJcbmltcG9ydCB7IHdpdGhFcnJvckhhbmRsZXIgfSBmcm9tICdAL2xpYi9hcGkvaGFuZGxlcic7XHJcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnQC9saWIvYXBpL2Vycm9yJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYic7XHJcbmltcG9ydCB7IHNvY2lvcywgaGFiZXJlcywgcHJlc3RhbW9zIH0gZnJvbSAnQC9saWIvZGIvc2NoZW1hJztcclxuaW1wb3J0IHsgZXEgfSBmcm9tICdkcml6emxlLW9ybSc7XHJcblxyXG4vLyBGdW5jacOzbiBhdXhpbGlhciBwYXJhIGNvbnZlcnRpciB2YWxvcmVzIGEgbsO6bWVyb1xyXG5mdW5jdGlvbiBwYXJzZURlY2ltYWwodmFsdWUpIHtcclxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gIHJldHVybiBpc05hTihudW1iZXIpID8gbnVsbCA6IG51bWJlcjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0RGFzaGJvYXJkKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBFeHRyYWVyIGNvZFNvY2lvIGRlIGxhIFVSTFxyXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcclxuICAgIGNvbnN0IHBhdGggPSB1cmwucGF0aG5hbWU7IC8vIFwiL2FwaS9kYXNoYm9hcmQvMTIzNDU2NzhcIlxyXG4gICAgY29uc3QgY29kU29jaW8gPSBwYXRoLnNwbGl0KCcvJykucG9wKCk7IC8vIEV4dHJhZSBlbCDDumx0aW1vIHNlZ21lbnRvXHJcblxyXG4gICAgY29uc29sZS5sb2coJ/CflI0gW0FQSV0gQnVzY2FuZG8gc29jaW8gY29uIGNvZFNvY2lvOicsIGNvZFNvY2lvKTtcclxuXHJcbiAgICBpZiAoIWNvZFNvY2lvKSB7XHJcbiAgICAgIHRocm93IG5ldyBBcGlFcnJvcignQ8OzZGlnbyBkZSBzb2NpbyBubyBwcm9wb3JjaW9uYWRvJywge1xyXG4gICAgICAgIGNvZGU6ICdNSVNTSU5HX1NPQ0lPJyxcclxuICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZpY2FyIGNvbmV4acOzbiBhIGxhIGJhc2UgZGUgZGF0b3NcclxuICAgIGlmICghZGIpIHtcclxuICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKCdCYXNlIGRlIGRhdG9zIG5vIGNvbmVjdGFkYScsIHtcclxuICAgICAgICBjb2RlOiAnREJfRVJST1InLFxyXG4gICAgICAgIHN0YXR1czogNTAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXNjYXIgc29jaW9cclxuICAgIGNvbnN0IFtzb2Npb10gPSBhd2FpdCBkYlxyXG4gICAgICAuc2VsZWN0KClcclxuICAgICAgLmZyb20oc29jaW9zKVxyXG4gICAgICAud2hlcmUoZXEoc29jaW9zLkNvZFNvY2lvLCBjb2RTb2NpbykpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCfwn5GkIFtBUEldIFNvY2lvIGVuY29udHJhZG86Jywgc29jaW8pO1xyXG5cclxuICAgIGlmICghc29jaW8pIHtcclxuICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKCdTb2NpbyBubyBlbmNvbnRyYWRvJywge1xyXG4gICAgICAgIGNvZGU6ICdTT0NJT19OT1RfRk9VTkQnLFxyXG4gICAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCdXNjYXIgaGFiZXJlc1xyXG4gICAgY29uc3QgW2hhYmVyXSA9IGF3YWl0IGRiXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuZnJvbShoYWJlcmVzKVxyXG4gICAgICAud2hlcmUoZXEoaGFiZXJlcy5jb2RTb2NpbywgY29kU29jaW8pKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygn8J+SsCBbQVBJXSBIYWJlcmVzIGVuY29udHJhZG9zOicsIGhhYmVyKTtcclxuXHJcbiAgICAvLyBCdXNjYXIgVE9ET1MgbG9zIHByw6lzdGFtb3MgZGVsIHNvY2lvIChvcmRlbmFkb3MgcG9yIGZlY2hhKVxyXG4gICAgY29uc3QgcHJlc3RhbW9zTGlzdCA9IGF3YWl0IGRiXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuZnJvbShwcmVzdGFtb3MpXHJcbiAgICAgIC53aGVyZShlcShwcmVzdGFtb3MuY29kU29jaW8sIGNvZFNvY2lvKSlcclxuICAgICAgLm9yZGVyQnkocHJlc3RhbW9zLmZlY2hhUHJlc3QsICdkZXNjJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ/Cfj6YgW0FQSV0gUHLDqXN0YW1vcyBlbmNvbnRyYWRvczonLCBwcmVzdGFtb3NMaXN0KTtcclxuXHJcbiAgICAvLyBDb252ZXJ0aXIgY2FtcG9zIG51bcOpcmljb3MgYSBmbG9hdFxyXG4gICAgY29uc3QgaGFiZXJlc1BhcnNlZCA9IGhhYmVyXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgY29kU29jaW86IGhhYmVyLmNvZFNvY2lvLFxyXG4gICAgICAgICAgYXBvcnRlUzogcGFyc2VEZWNpbWFsKGhhYmVyLmFwb3J0ZVMpLFxyXG4gICAgICAgICAgYXBvcnRlUDogcGFyc2VEZWNpbWFsKGhhYmVyLmFwb3J0ZVApLFxyXG4gICAgICAgICAgYXBvcnRlVjogcGFyc2VEZWNpbWFsKGhhYmVyLmFwb3J0ZVYpLFxyXG4gICAgICAgICAgcmV0aXJvSDogcGFyc2VEZWNpbWFsKGhhYmVyLnJldGlyb0gpLFxyXG4gICAgICAgICAgdG90YWxIOiBwYXJzZURlY2ltYWwoaGFiZXIudG90YWxIKSxcclxuICAgICAgICB9XHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBwcmVzdGFtb3NQYXJzZWQgPSBwcmVzdGFtb3NMaXN0Lm1hcCgocCkgPT4gKHtcclxuICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgIGNvZFNvY2lvOiBwLmNvZFNvY2lvLFxyXG4gICAgICB0aXBvUHJlc3Q6IHAudGlwb1ByZXN0LFxyXG4gICAgICBmZWNoYVByZXN0OiBwLmZlY2hhUHJlc3QsXHJcbiAgICAgIG1vbnRvUHJlc3Q6IHBhcnNlRGVjaW1hbChwLm1vbnRvUHJlc3QpLFxyXG4gICAgICBzYWxkb1ByZXN0OiBwYXJzZURlY2ltYWwocC5zYWxkb1ByZXN0KSxcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBEZXZvbHZlciByZXNwdWVzdGEgSlNPTlxyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNvY2lvLFxyXG4gICAgICAgIGhhYmVyZXM6IGhhYmVyZXNQYXJzZWQsXHJcbiAgICAgICAgcHJlc3RhbW9zOiBwcmVzdGFtb3NQYXJzZWQsIC8vIPCfkYggQWhvcmEgZXMgdW4gYXJyYXlcclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcign4p2MIFtBUEldIEVycm9yIGVuIGhhbmRsZUdldERhc2hib2FyZDonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVQgPSB3aXRoRXJyb3JIYW5kbGVyKGhhbmRsZUdldERhc2hib2FyZCk7XHJcbiJdLCJuYW1lcyI6WyJ3aXRoRXJyb3JIYW5kbGVyIiwiQXBpRXJyb3IiLCJkYiIsInNvY2lvcyIsImhhYmVyZXMiLCJwcmVzdGFtb3MiLCJlcSIsInBhcnNlRGVjaW1hbCIsInZhbHVlIiwidW5kZWZpbmVkIiwibnVtYmVyIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiaGFuZGxlR2V0RGFzaGJvYXJkIiwicmVxIiwidXJsIiwiVVJMIiwicGF0aCIsInBhdGhuYW1lIiwiY29kU29jaW8iLCJzcGxpdCIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwic3RhdHVzIiwic29jaW8iLCJzZWxlY3QiLCJmcm9tIiwid2hlcmUiLCJDb2RTb2NpbyIsImhhYmVyIiwicHJlc3RhbW9zTGlzdCIsIm9yZGVyQnkiLCJmZWNoYVByZXN0IiwiaGFiZXJlc1BhcnNlZCIsImFwb3J0ZVMiLCJhcG9ydGVQIiwiYXBvcnRlViIsInJldGlyb0giLCJ0b3RhbEgiLCJwcmVzdGFtb3NQYXJzZWQiLCJtYXAiLCJwIiwiaWQiLCJ0aXBvUHJlc3QiLCJtb250b1ByZXN0Iiwic2FsZG9QcmVzdCIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJlcnJvciIsIkdFVCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/dashboard/[codSocio]/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/api/error.js":
/*!**************************!*\
  !*** ./lib/api/error.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiError: () => (/* binding */ ApiError),\n/* harmony export */   handleError: () => (/* binding */ handleError)\n/* harmony export */ });\n// /lib/api/error.js\nclass ApiError extends Error {\n    constructor(message, { code = 'INTERNAL_ERROR', status = 500 } = {}){\n        super(message);\n        this.code = code;\n        this.status = status;\n    }\n}\nfunction handleError(error) {\n    // 🔥 Muestra el error real en la consola del servidor\n    console.error('❌ Error no manejado:', error);\n    console.error('❌ Tipo de error:', error.name);\n    console.error('❌ Mensaje:', error.message);\n    console.error('❌ Stack:', error.stack);\n    if (error instanceof ApiError) {\n        return new Response(JSON.stringify({\n            success: false,\n            error: {\n                message: error.message,\n                code: error.code\n            }\n        }), {\n            status: error.status,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n    // ✅ Devuelve más detalles en desarrollo\n    return new Response(JSON.stringify({\n        success: false,\n        error: {\n            message: 'Ocurrió un error inesperado.',\n            code: 'UNEXPECTED_ERROR',\n            // 👇 Solo en desarrollo: muestra el mensaje real\n            devMessage:  true ? error.message : 0,\n            devStack:  true ? error.stack : 0\n        }\n    }), {\n        status: 500,\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpL2Vycm9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0JBQW9CO0FBRXBCLE1BQU1BLGlCQUFpQkM7SUFDckJDLFlBQVlDLE9BQU8sRUFBRSxFQUFFQyxPQUFPLGdCQUFnQixFQUFFQyxTQUFTLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFFO1FBQ25FLEtBQUssQ0FBQ0Y7UUFDTixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7QUFDRjtBQUVBLFNBQVNDLFlBQVlDLEtBQUs7SUFDeEIsc0RBQXNEO0lBQ3REQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtJQUN0Q0MsUUFBUUQsS0FBSyxDQUFDLG9CQUFvQkEsTUFBTUUsSUFBSTtJQUM1Q0QsUUFBUUQsS0FBSyxDQUFDLGNBQWNBLE1BQU1KLE9BQU87SUFDekNLLFFBQVFELEtBQUssQ0FBQyxZQUFZQSxNQUFNRyxLQUFLO0lBRXJDLElBQUlILGlCQUFpQlAsVUFBVTtRQUM3QixPQUFPLElBQUlXLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxTQUFTO1lBQ1RQLE9BQU87Z0JBQ0xKLFNBQVNJLE1BQU1KLE9BQU87Z0JBQ3RCQyxNQUFNRyxNQUFNSCxJQUFJO1lBQ2xCO1FBQ0YsSUFDQTtZQUNFQyxRQUFRRSxNQUFNRixNQUFNO1lBQ3BCVSxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUVKO0lBRUEsd0NBQXdDO0lBQ3hDLE9BQU8sSUFBSUosU0FDVEMsS0FBS0MsU0FBUyxDQUFDO1FBQ2JDLFNBQVM7UUFDVFAsT0FBTztZQUNMSixTQUFTO1lBQ1RDLE1BQU07WUFDTixpREFBaUQ7WUFDakRZLFlBQ0VDLEtBQXNDLEdBQUdWLE1BQU1KLE9BQU8sR0FBR2UsQ0FBU0E7WUFDcEVDLFVBQ0VGLEtBQXNDLEdBQUdWLE1BQU1HLEtBQUssR0FBR1EsQ0FBU0E7UUFDcEU7SUFDRixJQUNBO1FBQ0ViLFFBQVE7UUFDUlUsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtBQUVKO0FBRWlDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEVkZ2FyIEogUm9qYXMgTFxcZGV2XFxjYXByZXMtd2ViXFxsaWJcXGFwaVxcZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2xpYi9hcGkvZXJyb3IuanNcclxuXHJcbmNsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHsgY29kZSA9ICdJTlRFUk5BTF9FUlJPUicsIHN0YXR1cyA9IDUwMCB9ID0ge30pIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICAvLyDwn5SlIE11ZXN0cmEgZWwgZXJyb3IgcmVhbCBlbiBsYSBjb25zb2xhIGRlbCBzZXJ2aWRvclxyXG4gIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciBubyBtYW5lamFkbzonLCBlcnJvcik7XHJcbiAgY29uc29sZS5lcnJvcign4p2MIFRpcG8gZGUgZXJyb3I6JywgZXJyb3IubmFtZSk7XHJcbiAgY29uc29sZS5lcnJvcign4p2MIE1lbnNhamU6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgY29uc29sZS5lcnJvcign4p2MIFN0YWNrOicsIGVycm9yLnN0YWNrKTtcclxuXHJcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQXBpRXJyb3IpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgIGNvZGU6IGVycm9yLmNvZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IGVycm9yLnN0YXR1cyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIOKchSBEZXZ1ZWx2ZSBtw6FzIGRldGFsbGVzIGVuIGRlc2Fycm9sbG9cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtZXNzYWdlOiAnT2N1cnJpw7MgdW4gZXJyb3IgaW5lc3BlcmFkby4nLFxyXG4gICAgICAgIGNvZGU6ICdVTkVYUEVDVEVEX0VSUk9SJyxcclxuICAgICAgICAvLyDwn5GHIFNvbG8gZW4gZGVzYXJyb2xsbzogbXVlc3RyYSBlbCBtZW5zYWplIHJlYWxcclxuICAgICAgICBkZXZNZXNzYWdlOlxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBlcnJvci5tZXNzYWdlIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRldlN0YWNrOlxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBlcnJvci5zdGFjayA6IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAge1xyXG4gICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQXBpRXJyb3IsIGhhbmRsZUVycm9yIH07XHJcbiJdLCJuYW1lcyI6WyJBcGlFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiY29kZSIsInN0YXR1cyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibmFtZSIsInN0YWNrIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsImhlYWRlcnMiLCJkZXZNZXNzYWdlIiwicHJvY2VzcyIsInVuZGVmaW5lZCIsImRldlN0YWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api/error.js\n");

/***/ }),

/***/ "(rsc)/./lib/api/handler.js":
/*!****************************!*\
  !*** ./lib/api/handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiError: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_0__.ApiError),\n/* harmony export */   withErrorHandler: () => (/* binding */ withErrorHandler)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"(rsc)/./lib/api/error.js\");\n// /lib/api/handler.js\n\nfunction withErrorHandler(handler) {\n    return async function(req) {\n        try {\n            return await handler(req);\n        } catch (error) {\n            return (0,_error__WEBPACK_IMPORTED_MODULE_0__.handleError)(error);\n        }\n    };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpL2hhbmRsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0JBQXNCO0FBQzBCO0FBRWhELFNBQVNFLGlCQUFpQkMsT0FBTztJQUMvQixPQUFPLGVBQWdCQyxHQUFHO1FBQ3hCLElBQUk7WUFDRixPQUFPLE1BQU1ELFFBQVFDO1FBQ3ZCLEVBQUUsT0FBT0MsT0FBTztZQUNkLE9BQU9KLG1EQUFXQSxDQUFDSTtRQUNyQjtJQUNGO0FBQ0Y7QUFFc0MiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRnYXIgSiBSb2phcyBMXFxkZXZcXGNhcHJlcy13ZWJcXGxpYlxcYXBpXFxoYW5kbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9saWIvYXBpL2hhbmRsZXIuanNcclxuaW1wb3J0IHsgQXBpRXJyb3IsIGhhbmRsZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XHJcblxyXG5mdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGVyKGhhbmRsZXIpIHtcclxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHJlcSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGhhbmRsZXIocmVxKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBoYW5kbGVFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgd2l0aEVycm9ySGFuZGxlciwgQXBpRXJyb3IgfTtcclxuIl0sIm5hbWVzIjpbIkFwaUVycm9yIiwiaGFuZGxlRXJyb3IiLCJ3aXRoRXJyb3JIYW5kbGVyIiwiaGFuZGxlciIsInJlcSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api/handler.js\n");

/***/ }),

/***/ "(rsc)/./lib/db/connect.js":
/*!***************************!*\
  !*** ./lib/db/connect.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var drizzle_orm_mysql2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/mysql2 */ \"(rsc)/./node_modules/drizzle-orm/mysql2/index.mjs\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"(rsc)/./node_modules/dotenv/config.js\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.MYSQL_HOST,\n    port: Number(process.env.MYSQL_PORT),\n    user: process.env.MYSQL_USER,\n    password: process.env.MYSQL_PASSWORD,\n    database: process.env.MYSQL_DATABASE,\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n// Bloque para verificar la conexión al iniciar la aplicación.\n// Esto te ayudará a saber inmediatamente si el problema es la conexión a la BD.\npool.getConnection().then((connection)=>{\n    console.log('✅ Conexión a la base de datos establecida con éxito.');\n    connection.release(); // Libera la conexión de vuelta al pool\n}).catch((err)=>{\n    console.error('❌ Error al conectar con la base de datos:', err.message);\n});\nconst db = (0,drizzle_orm_mysql2__WEBPACK_IMPORTED_MODULE_2__.drizzle)(pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvY29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQztBQUNVO0FBQ3RCO0FBRXZCLE1BQU1FLE9BQU9GLHNEQUFnQixDQUFDO0lBQzVCSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDNUJDLE1BQU1DLE9BQU9KLFFBQVFDLEdBQUcsQ0FBQ0ksVUFBVTtJQUNuQ0MsTUFBTU4sUUFBUUMsR0FBRyxDQUFDTSxVQUFVO0lBQzVCQyxVQUFVUixRQUFRQyxHQUFHLENBQUNRLGNBQWM7SUFDcENDLFVBQVVWLFFBQVFDLEdBQUcsQ0FBQ1UsY0FBYztJQUNwQ0Msb0JBQW9CO0lBQ3BCQyxpQkFBaUI7SUFDakJDLFlBQVk7QUFDZDtBQUVBLDhEQUE4RDtBQUM5RCxnRkFBZ0Y7QUFDaEZqQixLQUNHa0IsYUFBYSxHQUNiQyxJQUFJLENBQUMsQ0FBQ0M7SUFDTEMsUUFBUUMsR0FBRyxDQUFDO0lBQ1pGLFdBQVdHLE9BQU8sSUFBSSx1Q0FBdUM7QUFDL0QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO0lBQ05KLFFBQVFLLEtBQUssQ0FBQyw2Q0FBNkNELElBQUlFLE9BQU87QUFDeEU7QUFFSyxNQUFNQyxLQUFLN0IsMkRBQU9BLENBQUNDLE1BQU0iLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRnYXIgSiBSb2phcyBMXFxkZXZcXGNhcHJlcy13ZWJcXGxpYlxcZGJcXGNvbm5lY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgZHJpenpsZSB9IGZyb20gJ2RyaXp6bGUtb3JtL215c3FsMic7XHJcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XHJcblxyXG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgaG9zdDogcHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCxcclxuICBwb3J0OiBOdW1iZXIocHJvY2Vzcy5lbnYuTVlTUUxfUE9SVCksXHJcbiAgdXNlcjogcHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcclxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxyXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcclxuICBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gIHF1ZXVlTGltaXQ6IDAsXHJcbn0pO1xyXG5cclxuLy8gQmxvcXVlIHBhcmEgdmVyaWZpY2FyIGxhIGNvbmV4acOzbiBhbCBpbmljaWFyIGxhIGFwbGljYWNpw7NuLlxyXG4vLyBFc3RvIHRlIGF5dWRhcsOhIGEgc2FiZXIgaW5tZWRpYXRhbWVudGUgc2kgZWwgcHJvYmxlbWEgZXMgbGEgY29uZXhpw7NuIGEgbGEgQkQuXHJcbnBvb2xcclxuICAuZ2V0Q29ubmVjdGlvbigpXHJcbiAgLnRoZW4oKGNvbm5lY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfinIUgQ29uZXhpw7NuIGEgbGEgYmFzZSBkZSBkYXRvcyBlc3RhYmxlY2lkYSBjb24gw6l4aXRvLicpO1xyXG4gICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7IC8vIExpYmVyYSBsYSBjb25leGnDs24gZGUgdnVlbHRhIGFsIHBvb2xcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3IgYWwgY29uZWN0YXIgY29uIGxhIGJhc2UgZGUgZGF0b3M6JywgZXJyLm1lc3NhZ2UpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZHJpenpsZShwb29sKTtcclxuIl0sIm5hbWVzIjpbIm15c3FsIiwiZHJpenpsZSIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwicG9ydCIsIk51bWJlciIsIk1ZU1FMX1BPUlQiLCJ1c2VyIiwiTVlTUUxfVVNFUiIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsImdldENvbm5lY3Rpb24iLCJ0aGVuIiwiY29ubmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZWxlYXNlIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJkYiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/connect.js\n");

/***/ }),

/***/ "(rsc)/./lib/db/index.js":
/*!*************************!*\
  !*** ./lib/db/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* reexport safe */ _connect__WEBPACK_IMPORTED_MODULE_0__.db),\n/* harmony export */   haberes: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.haberes),\n/* harmony export */   prestamos: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.prestamos),\n/* harmony export */   socios: () => (/* reexport safe */ _schema__WEBPACK_IMPORTED_MODULE_1__.socios)\n/* harmony export */ });\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ \"(rsc)/./lib/db/connect.js\");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"(rsc)/./lib/db/schema.js\");\n// /lib/db/index.js\n\n // Exporta todas las tablas\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUJBQW1CO0FBRVk7QUFDTixDQUFDLDJCQUEyQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFZGdhciBKIFJvamFzIExcXGRldlxcY2FwcmVzLXdlYlxcbGliXFxkYlxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2xpYi9kYi9pbmRleC5qc1xyXG5cclxuZXhwb3J0IHsgZGIgfSBmcm9tICcuL2Nvbm5lY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7IC8vIEV4cG9ydGEgdG9kYXMgbGFzIHRhYmxhc1xyXG4iXSwibmFtZXMiOlsiZGIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/index.js\n");

/***/ }),

/***/ "(rsc)/./lib/db/schema.js":
/*!**************************!*\
  !*** ./lib/db/schema.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   haberes: () => (/* binding */ haberes),\n/* harmony export */   prestamos: () => (/* binding */ prestamos),\n/* harmony export */   socios: () => (/* binding */ socios)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/mysql-core */ \"(rsc)/./node_modules/drizzle-orm/view-23898f21.mjs\");\n/* harmony import */ var drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/mysql-core */ \"(rsc)/./node_modules/drizzle-orm/mysql-core/index.mjs\");\n// /lib/db/schema.js\n\n/**\r\n * Tabla: socios\r\n * Contiene información principal del socio\r\n */ const socios = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('socios', {\n    CodSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('CodSocio', {\n        length: 10\n    }).primaryKey(),\n    NombreCompleto: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('NombreCompleto', {\n        length: 255\n    }),\n    NroCtaBanco: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('NroCtaBanco', {\n        length: 20\n    }),\n    Estatus: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Estatus', {\n        length: 1\n    }),\n    FechaIng: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaIng'),\n    PorAporteS: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('PorAporteS', {\n        precision: 10,\n        scale: 2\n    }),\n    PorAporteP: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('PorAporteP', {\n        precision: 10,\n        scale: 2\n    }),\n    SaldoInicial: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('SaldoInicial', {\n        precision: 10,\n        scale: 2\n    }),\n    SaldoActual: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('SaldoActual', {\n        precision: 10,\n        scale: 2\n    }),\n    FecUltimoPrestamo: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FecUltimoPrestamo'),\n    Estado: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.tinyint)('Estado'),\n    Telefonos: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Telefonos', {\n        length: 255\n    }),\n    FechaEgreso: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaEgreso'),\n    FechaRegistro: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaRegistro'),\n    Email: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Email', {\n        length: 255\n    }),\n    password: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('password', {\n        length: 255\n    })\n});\n/**\r\n * Tabla: haberes\r\n * Contiene información sobre los aportes y haberes del socio\r\n */ const haberes = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('haberes', {\n    codSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('codSocio', {\n        length: 10\n    }).primaryKey(),\n    aporteS: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteS', {\n        precision: 10,\n        scale: 2\n    }),\n    aporteP: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteP', {\n        precision: 10,\n        scale: 2\n    }),\n    aporteV: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteV', {\n        precision: 10,\n        scale: 2\n    }),\n    retiroH: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('retiroH', {\n        precision: 10,\n        scale: 2\n    }),\n    totalH: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('totalH', {\n        precision: 10,\n        scale: 2\n    })\n});\n/**\r\n * Tabla: prestamos\r\n * Contiene los préstamos del socio\r\n * Puede haber múltiples préstamos por socio\r\n */ const prestamos = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('prestamos', {\n    id: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('id', {\n        length: 36\n    }).primaryKey(),\n    codSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('codSocio', {\n        length: 10\n    }).notNull(),\n    tipoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('tipoPrest', {\n        length: 255\n    }),\n    fechaPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('fechaPrest'),\n    montoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('montoPrest', {\n        precision: 10,\n        scale: 2\n    }),\n    saldoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('saldoPrest', {\n        precision: 10,\n        scale: 2\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvc2NoZW1hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBUVk7QUFFaEM7OztDQUdDLEdBQ00sTUFBTUssU0FBU0wseURBQVVBLENBQUMsVUFBVTtJQUN6Q00sVUFBVUwsK0RBQU9BLENBQUMsWUFBWTtRQUFFTSxRQUFRO0lBQUcsR0FBR0MsVUFBVTtJQUN4REMsZ0JBQWdCUiwrREFBT0EsQ0FBQyxrQkFBa0I7UUFBRU0sUUFBUTtJQUFJO0lBQ3hERyxhQUFhVCwrREFBT0EsQ0FBQyxlQUFlO1FBQUVNLFFBQVE7SUFBRztJQUNqREksU0FBU1YsK0RBQU9BLENBQUMsV0FBVztRQUFFTSxRQUFRO0lBQUU7SUFDeENLLFVBQVVWLDREQUFJQSxDQUFDO0lBQ2ZXLFlBQVlWLCtEQUFPQSxDQUFDLGNBQWM7UUFBRVcsV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDNURDLFlBQVliLCtEQUFPQSxDQUFDLGNBQWM7UUFBRVcsV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDNURFLGNBQWNkLCtEQUFPQSxDQUFDLGdCQUFnQjtRQUFFVyxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUNoRUcsYUFBYWYsK0RBQU9BLENBQUMsZUFBZTtRQUFFVyxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUM5REksbUJBQW1CakIsNERBQUlBLENBQUM7SUFDeEJrQixRQUFRaEIsK0RBQU9BLENBQUM7SUFDaEJpQixXQUFXcEIsK0RBQU9BLENBQUMsYUFBYTtRQUFFTSxRQUFRO0lBQUk7SUFDOUNlLGFBQWFwQiw0REFBSUEsQ0FBQztJQUNsQnFCLGVBQWVyQiw0REFBSUEsQ0FBQztJQUNwQnNCLE9BQU92QiwrREFBT0EsQ0FBQyxTQUFTO1FBQUVNLFFBQVE7SUFBSTtJQUN0Q2tCLFVBQVV4QiwrREFBT0EsQ0FBQyxZQUFZO1FBQUVNLFFBQVE7SUFBSTtBQUM5QyxHQUFHO0FBRUg7OztDQUdDLEdBQ00sTUFBTW1CLFVBQVUxQix5REFBVUEsQ0FBQyxXQUFXO0lBQzNDMkIsVUFBVTFCLCtEQUFPQSxDQUFDLFlBQVk7UUFBRU0sUUFBUTtJQUFHLEdBQUdDLFVBQVU7SUFDeERvQixTQUFTekIsK0RBQU9BLENBQUMsV0FBVztRQUFFVyxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUN0RGMsU0FBUzFCLCtEQUFPQSxDQUFDLFdBQVc7UUFBRVcsV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDdERlLFNBQVMzQiwrREFBT0EsQ0FBQyxXQUFXO1FBQUVXLFdBQVc7UUFBSUMsT0FBTztJQUFFO0lBQ3REZ0IsU0FBUzVCLCtEQUFPQSxDQUFDLFdBQVc7UUFBRVcsV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDdERpQixRQUFRN0IsK0RBQU9BLENBQUMsVUFBVTtRQUFFVyxXQUFXO1FBQUlDLE9BQU87SUFBRTtBQUN0RCxHQUFHO0FBRUg7Ozs7Q0FJQyxHQUNNLE1BQU1rQixZQUFZakMseURBQVVBLENBQUMsYUFBYTtJQUMvQ2tDLElBQUlqQywrREFBT0EsQ0FBQyxNQUFNO1FBQUVNLFFBQVE7SUFBRyxHQUFHQyxVQUFVO0lBQzVDbUIsVUFBVTFCLCtEQUFPQSxDQUFDLFlBQVk7UUFBRU0sUUFBUTtJQUFHLEdBQUc0QixPQUFPO0lBQ3JEQyxXQUFXbkMsK0RBQU9BLENBQUMsYUFBYTtRQUFFTSxRQUFRO0lBQUk7SUFDOUM4QixZQUFZbkMsNERBQUlBLENBQUM7SUFDakJvQyxZQUFZbkMsK0RBQU9BLENBQUMsY0FBYztRQUFFVyxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUM1RHdCLFlBQVlwQywrREFBT0EsQ0FBQyxjQUFjO1FBQUVXLFdBQVc7UUFBSUMsT0FBTztJQUFFO0FBQzlELEdBQUciLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRnYXIgSiBSb2phcyBMXFxkZXZcXGNhcHJlcy13ZWJcXGxpYlxcZGJcXHNjaGVtYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvbGliL2RiL3NjaGVtYS5qc1xyXG5cclxuaW1wb3J0IHtcclxuICBteXNxbFRhYmxlLFxyXG4gIHZhcmNoYXIsXHJcbiAgZGF0ZSxcclxuICBkZWNpbWFsLFxyXG4gIHRpbnlpbnQsXHJcbn0gZnJvbSAnZHJpenpsZS1vcm0vbXlzcWwtY29yZSc7XHJcblxyXG4vKipcclxuICogVGFibGE6IHNvY2lvc1xyXG4gKiBDb250aWVuZSBpbmZvcm1hY2nDs24gcHJpbmNpcGFsIGRlbCBzb2Npb1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNvY2lvcyA9IG15c3FsVGFibGUoJ3NvY2lvcycsIHtcclxuICBDb2RTb2NpbzogdmFyY2hhcignQ29kU29jaW8nLCB7IGxlbmd0aDogMTAgfSkucHJpbWFyeUtleSgpLFxyXG4gIE5vbWJyZUNvbXBsZXRvOiB2YXJjaGFyKCdOb21icmVDb21wbGV0bycsIHsgbGVuZ3RoOiAyNTUgfSksXHJcbiAgTnJvQ3RhQmFuY286IHZhcmNoYXIoJ05yb0N0YUJhbmNvJywgeyBsZW5ndGg6IDIwIH0pLFxyXG4gIEVzdGF0dXM6IHZhcmNoYXIoJ0VzdGF0dXMnLCB7IGxlbmd0aDogMSB9KSxcclxuICBGZWNoYUluZzogZGF0ZSgnRmVjaGFJbmcnKSxcclxuICBQb3JBcG9ydGVTOiBkZWNpbWFsKCdQb3JBcG9ydGVTJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBQb3JBcG9ydGVQOiBkZWNpbWFsKCdQb3JBcG9ydGVQJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBTYWxkb0luaWNpYWw6IGRlY2ltYWwoJ1NhbGRvSW5pY2lhbCcsIHsgcHJlY2lzaW9uOiAxMCwgc2NhbGU6IDIgfSksXHJcbiAgU2FsZG9BY3R1YWw6IGRlY2ltYWwoJ1NhbGRvQWN0dWFsJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBGZWNVbHRpbW9QcmVzdGFtbzogZGF0ZSgnRmVjVWx0aW1vUHJlc3RhbW8nKSxcclxuICBFc3RhZG86IHRpbnlpbnQoJ0VzdGFkbycpLFxyXG4gIFRlbGVmb25vczogdmFyY2hhcignVGVsZWZvbm9zJywgeyBsZW5ndGg6IDI1NSB9KSxcclxuICBGZWNoYUVncmVzbzogZGF0ZSgnRmVjaGFFZ3Jlc28nKSxcclxuICBGZWNoYVJlZ2lzdHJvOiBkYXRlKCdGZWNoYVJlZ2lzdHJvJyksXHJcbiAgRW1haWw6IHZhcmNoYXIoJ0VtYWlsJywgeyBsZW5ndGg6IDI1NSB9KSxcclxuICBwYXNzd29yZDogdmFyY2hhcigncGFzc3dvcmQnLCB7IGxlbmd0aDogMjU1IH0pLCAvLyBDb250cmFzZcOxYSBkZWwgc29jaW9cclxufSk7XHJcblxyXG4vKipcclxuICogVGFibGE6IGhhYmVyZXNcclxuICogQ29udGllbmUgaW5mb3JtYWNpw7NuIHNvYnJlIGxvcyBhcG9ydGVzIHkgaGFiZXJlcyBkZWwgc29jaW9cclxuICovXHJcbmV4cG9ydCBjb25zdCBoYWJlcmVzID0gbXlzcWxUYWJsZSgnaGFiZXJlcycsIHtcclxuICBjb2RTb2NpbzogdmFyY2hhcignY29kU29jaW8nLCB7IGxlbmd0aDogMTAgfSkucHJpbWFyeUtleSgpLFxyXG4gIGFwb3J0ZVM6IGRlY2ltYWwoJ2Fwb3J0ZVMnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIGFwb3J0ZVA6IGRlY2ltYWwoJ2Fwb3J0ZVAnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIGFwb3J0ZVY6IGRlY2ltYWwoJ2Fwb3J0ZVYnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIHJldGlyb0g6IGRlY2ltYWwoJ3JldGlyb0gnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIHRvdGFsSDogZGVjaW1hbCgndG90YWxIJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxufSk7XHJcblxyXG4vKipcclxuICogVGFibGE6IHByZXN0YW1vc1xyXG4gKiBDb250aWVuZSBsb3MgcHLDqXN0YW1vcyBkZWwgc29jaW9cclxuICogUHVlZGUgaGFiZXIgbcO6bHRpcGxlcyBwcsOpc3RhbW9zIHBvciBzb2Npb1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHByZXN0YW1vcyA9IG15c3FsVGFibGUoJ3ByZXN0YW1vcycsIHtcclxuICBpZDogdmFyY2hhcignaWQnLCB7IGxlbmd0aDogMzYgfSkucHJpbWFyeUtleSgpLCAvLyBVVUlEXHJcbiAgY29kU29jaW86IHZhcmNoYXIoJ2NvZFNvY2lvJywgeyBsZW5ndGg6IDEwIH0pLm5vdE51bGwoKSxcclxuICB0aXBvUHJlc3Q6IHZhcmNoYXIoJ3RpcG9QcmVzdCcsIHsgbGVuZ3RoOiAyNTUgfSksXHJcbiAgZmVjaGFQcmVzdDogZGF0ZSgnZmVjaGFQcmVzdCcpLFxyXG4gIG1vbnRvUHJlc3Q6IGRlY2ltYWwoJ21vbnRvUHJlc3QnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIHNhbGRvUHJlc3Q6IGRlY2ltYWwoJ3NhbGRvUHJlc3QnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIm15c3FsVGFibGUiLCJ2YXJjaGFyIiwiZGF0ZSIsImRlY2ltYWwiLCJ0aW55aW50Iiwic29jaW9zIiwiQ29kU29jaW8iLCJsZW5ndGgiLCJwcmltYXJ5S2V5IiwiTm9tYnJlQ29tcGxldG8iLCJOcm9DdGFCYW5jbyIsIkVzdGF0dXMiLCJGZWNoYUluZyIsIlBvckFwb3J0ZVMiLCJwcmVjaXNpb24iLCJzY2FsZSIsIlBvckFwb3J0ZVAiLCJTYWxkb0luaWNpYWwiLCJTYWxkb0FjdHVhbCIsIkZlY1VsdGltb1ByZXN0YW1vIiwiRXN0YWRvIiwiVGVsZWZvbm9zIiwiRmVjaGFFZ3Jlc28iLCJGZWNoYVJlZ2lzdHJvIiwiRW1haWwiLCJwYXNzd29yZCIsImhhYmVyZXMiLCJjb2RTb2NpbyIsImFwb3J0ZVMiLCJhcG9ydGVQIiwiYXBvcnRlViIsInJldGlyb0giLCJ0b3RhbEgiLCJwcmVzdGFtb3MiLCJpZCIsIm5vdE51bGwiLCJ0aXBvUHJlc3QiLCJmZWNoYVByZXN0IiwibW9udG9QcmVzdCIsInNhbGRvUHJlc3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/schema.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_dashboard_codSocio_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/dashboard/[codSocio]/route.js */ \"(rsc)/./app/api/dashboard/[codSocio]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/[codSocio]/route\",\n        pathname: \"/api/dashboard/[codSocio]\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/[codSocio]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Edgar J Rojas L\\\\dev\\\\capres-web\\\\app\\\\api\\\\dashboard\\\\[codSocio]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_dashboard_codSocio_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkYlNUJjb2RTb2NpbyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZGFzaGJvYXJkJTJGJTVCY29kU29jaW8lNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkYXNoYm9hcmQlMkYlNUJjb2RTb2NpbyU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNzQztBQUNuSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcZGFzaGJvYXJkXFxcXFtjb2RTb2Npb11cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Rhc2hib2FyZC9bY29kU29jaW9dL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGFzaGJvYXJkL1tjb2RTb2Npb11cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Rhc2hib2FyZC9bY29kU29jaW9dL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcZGFzaGJvYXJkXFxcXFtjb2RTb2Npb11cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

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

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/drizzle-orm","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/dotenv","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();