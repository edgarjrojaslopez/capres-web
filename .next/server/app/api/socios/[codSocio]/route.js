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
exports.id = "app/api/socios/[codSocio]/route";
exports.ids = ["app/api/socios/[codSocio]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/socios/[codSocio]/route.js":
/*!********************************************!*\
  !*** ./app/api/socios/[codSocio]/route.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PUT: () => (/* binding */ PUT),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var _lib_api_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/api/handler */ \"(rsc)/./lib/api/handler.js\");\n/* harmony import */ var _lib_api_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/api/error */ \"(rsc)/./lib/api/error.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db/index.js\");\n/* harmony import */ var _lib_db_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db/schema */ \"(rsc)/./lib/db/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/alias-cf8e03cd.mjs\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\nconst runtime = 'nodejs';\n\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function updateSocioHandler(req) {\n    // Obtener codSocio de la URL\n    const url = new URL(req.url);\n    const codSocio = url.pathname.split('/').pop();\n    // Verificar token\n    const authHeader = req.headers.get('Authorization');\n    if (!authHeader || !authHeader.startsWith('Bearer ')) {\n        throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('No autorizado', {\n            status: 401\n        });\n    }\n    const token = authHeader.split(' ')[1];\n    let decoded;\n    try {\n        const secret = new TextEncoder().encode(JWT_SECRET);\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_4__.jwtVerify)(token, secret);\n        decoded = payload;\n    } catch (err) {\n        throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('Token inválido', {\n            status: 401\n        });\n    }\n    // Verificar que el socio solo pueda editar sus propios datos\n    if (decoded.cedula !== codSocio) {\n        throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('No autorizado para editar estos datos', {\n            status: 403\n        });\n    }\n    // Obtener datos del body\n    const { Telefonos, Email } = await req.json();\n    // Validar que solo se envíen campos permitidos\n    const allowedFields = {};\n    if (Telefonos !== undefined) allowedFields.Telefonos = Telefonos;\n    if (Email !== undefined) allowedFields.Email = Email;\n    if (Object.keys(allowedFields).length === 0) {\n        throw new _lib_api_error__WEBPACK_IMPORTED_MODULE_1__.ApiError('No hay campos válidos para actualizar', {\n            status: 400\n        });\n    }\n    // Actualizar en la base de datos\n    await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.update(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.socios).set(allowedFields).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_5__.F)(_lib_db_schema__WEBPACK_IMPORTED_MODULE_3__.socios.CodSocio, codSocio));\n    return new Response(JSON.stringify({\n        success: true,\n        message: 'Datos actualizados correctamente',\n        updatedFields: allowedFields\n    }), {\n        status: 200\n    });\n}\nconst PUT = (0,_lib_api_handler__WEBPACK_IMPORTED_MODULE_0__.withErrorHandler)(updateSocioHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NvY2lvcy9bY29kU29jaW9dL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBVSxTQUFTO0FBRXFCO0FBQ1Y7QUFDYjtBQUNXO0FBQ1I7QUFDQTtBQUVqQyxNQUFNTyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7QUFFekMsZUFBZUcsbUJBQW1CQyxHQUFHO0lBQ25DLDZCQUE2QjtJQUM3QixNQUFNQyxNQUFNLElBQUlDLElBQUlGLElBQUlDLEdBQUc7SUFDM0IsTUFBTUUsV0FBV0YsSUFBSUcsUUFBUSxDQUFDQyxLQUFLLENBQUMsS0FBS0MsR0FBRztJQUU1QyxrQkFBa0I7SUFDbEIsTUFBTUMsYUFBYVAsSUFBSVEsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDbkMsSUFBSSxDQUFDRixjQUFjLENBQUNBLFdBQVdHLFVBQVUsQ0FBQyxZQUFZO1FBQ3BELE1BQU0sSUFBSW5CLG9EQUFRQSxDQUFDLGlCQUFpQjtZQUFFb0IsUUFBUTtRQUFJO0lBQ3BEO0lBRUEsTUFBTUMsUUFBUUwsV0FBV0YsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3RDLElBQUlRO0lBQ0osSUFBSTtRQUNGLE1BQU1DLFNBQVMsSUFBSUMsY0FBY0MsTUFBTSxDQUFDcEI7UUFDeEMsTUFBTSxFQUFFcUIsT0FBTyxFQUFFLEdBQUcsTUFBTXRCLCtDQUFTQSxDQUFDaUIsT0FBT0U7UUFDM0NELFVBQVVJO0lBQ1osRUFBRSxPQUFPQyxLQUFLO1FBQ1osTUFBTSxJQUFJM0Isb0RBQVFBLENBQUMsa0JBQWtCO1lBQUVvQixRQUFRO1FBQUk7SUFDckQ7SUFFQSw2REFBNkQ7SUFDN0QsSUFBSUUsUUFBUU0sTUFBTSxLQUFLaEIsVUFBVTtRQUMvQixNQUFNLElBQUlaLG9EQUFRQSxDQUFDLHlDQUF5QztZQUFFb0IsUUFBUTtRQUFJO0lBQzVFO0lBRUEseUJBQXlCO0lBQ3pCLE1BQU0sRUFBRVMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNckIsSUFBSXNCLElBQUk7SUFFM0MsK0NBQStDO0lBQy9DLE1BQU1DLGdCQUFnQixDQUFDO0lBQ3ZCLElBQUlILGNBQWNJLFdBQVdELGNBQWNILFNBQVMsR0FBR0E7SUFDdkQsSUFBSUMsVUFBVUcsV0FBV0QsY0FBY0YsS0FBSyxHQUFHQTtJQUUvQyxJQUFJSSxPQUFPQyxJQUFJLENBQUNILGVBQWVJLE1BQU0sS0FBSyxHQUFHO1FBQzNDLE1BQU0sSUFBSXBDLG9EQUFRQSxDQUFDLHlDQUF5QztZQUFFb0IsUUFBUTtRQUFJO0lBQzVFO0lBRUEsaUNBQWlDO0lBQ2pDLE1BQU1uQix1Q0FBRUEsQ0FDTG9DLE1BQU0sQ0FBQ25DLGtEQUFNQSxFQUNib0MsR0FBRyxDQUFDTixlQUNKTyxLQUFLLENBQUNwQyw4Q0FBRUEsQ0FBQ0Qsa0RBQU1BLENBQUNzQyxRQUFRLEVBQUU1QjtJQUU3QixPQUFPLElBQUk2QixTQUNUQyxLQUFLQyxTQUFTLENBQUM7UUFDYkMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLGVBQWVkO0lBQ2pCLElBQ0E7UUFBRVosUUFBUTtJQUFJO0FBRWxCO0FBRU8sTUFBTTJCLE1BQU1oRCxrRUFBZ0JBLENBQUNTLG9CQUFvQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFZGdhciBKIFJvamFzIExcXGRldlxcY2FwcmVzLXdlYlxcYXBwXFxhcGlcXHNvY2lvc1xcW2NvZFNvY2lvXVxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSAnbm9kZWpzJztcblxuaW1wb3J0IHsgd2l0aEVycm9ySGFuZGxlciB9IGZyb20gJ0AvbGliL2FwaS9oYW5kbGVyJztcbmltcG9ydCB7IEFwaUVycm9yIH0gZnJvbSAnQC9saWIvYXBpL2Vycm9yJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IHsgc29jaW9zIH0gZnJvbSAnQC9saWIvZGIvc2NoZW1hJztcbmltcG9ydCB7IGVxIH0gZnJvbSAnZHJpenpsZS1vcm0nO1xuaW1wb3J0IHsgand0VmVyaWZ5IH0gZnJvbSAnam9zZSc7XG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVTb2Npb0hhbmRsZXIocmVxKSB7XG4gIC8vIE9idGVuZXIgY29kU29jaW8gZGUgbGEgVVJMXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gIGNvbnN0IGNvZFNvY2lvID0gdXJsLnBhdGhuYW1lLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgLy8gVmVyaWZpY2FyIHRva2VuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSByZXEuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKTtcbiAgaWYgKCFhdXRoSGVhZGVyIHx8ICFhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoJ0JlYXJlciAnKSkge1xuICAgIHRocm93IG5ldyBBcGlFcnJvcignTm8gYXV0b3JpemFkbycsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBjb25zdCB0b2tlbiA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcbiAgbGV0IGRlY29kZWQ7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2VjcmV0ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKEpXVF9TRUNSRVQpO1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBzZWNyZXQpO1xuICAgIGRlY29kZWQgPSBwYXlsb2FkO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ1Rva2VuIGludsOhbGlkbycsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICAvLyBWZXJpZmljYXIgcXVlIGVsIHNvY2lvIHNvbG8gcHVlZGEgZWRpdGFyIHN1cyBwcm9waW9zIGRhdG9zXG4gIGlmIChkZWNvZGVkLmNlZHVsYSAhPT0gY29kU29jaW8pIHtcbiAgICB0aHJvdyBuZXcgQXBpRXJyb3IoJ05vIGF1dG9yaXphZG8gcGFyYSBlZGl0YXIgZXN0b3MgZGF0b3MnLCB7IHN0YXR1czogNDAzIH0pO1xuICB9XG5cbiAgLy8gT2J0ZW5lciBkYXRvcyBkZWwgYm9keVxuICBjb25zdCB7IFRlbGVmb25vcywgRW1haWwgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgLy8gVmFsaWRhciBxdWUgc29sbyBzZSBlbnbDrWVuIGNhbXBvcyBwZXJtaXRpZG9zXG4gIGNvbnN0IGFsbG93ZWRGaWVsZHMgPSB7fTtcbiAgaWYgKFRlbGVmb25vcyAhPT0gdW5kZWZpbmVkKSBhbGxvd2VkRmllbGRzLlRlbGVmb25vcyA9IFRlbGVmb25vcztcbiAgaWYgKEVtYWlsICE9PSB1bmRlZmluZWQpIGFsbG93ZWRGaWVsZHMuRW1haWwgPSBFbWFpbDtcblxuICBpZiAoT2JqZWN0LmtleXMoYWxsb3dlZEZpZWxkcykubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEFwaUVycm9yKCdObyBoYXkgY2FtcG9zIHbDoWxpZG9zIHBhcmEgYWN0dWFsaXphcicsIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICAvLyBBY3R1YWxpemFyIGVuIGxhIGJhc2UgZGUgZGF0b3NcbiAgYXdhaXQgZGJcbiAgICAudXBkYXRlKHNvY2lvcylcbiAgICAuc2V0KGFsbG93ZWRGaWVsZHMpXG4gICAgLndoZXJlKGVxKHNvY2lvcy5Db2RTb2NpbywgY29kU29jaW8pKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFxuICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBtZXNzYWdlOiAnRGF0b3MgYWN0dWFsaXphZG9zIGNvcnJlY3RhbWVudGUnLFxuICAgICAgdXBkYXRlZEZpZWxkczogYWxsb3dlZEZpZWxkc1xuICAgIH0pLFxuICAgIHsgc3RhdHVzOiAyMDAgfVxuICApO1xufVxuXG5leHBvcnQgY29uc3QgUFVUID0gd2l0aEVycm9ySGFuZGxlcih1cGRhdGVTb2Npb0hhbmRsZXIpOyJdLCJuYW1lcyI6WyJydW50aW1lIiwid2l0aEVycm9ySGFuZGxlciIsIkFwaUVycm9yIiwiZGIiLCJzb2Npb3MiLCJlcSIsImp3dFZlcmlmeSIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwidXBkYXRlU29jaW9IYW5kbGVyIiwicmVxIiwidXJsIiwiVVJMIiwiY29kU29jaW8iLCJwYXRobmFtZSIsInNwbGl0IiwicG9wIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwic3RhdHVzIiwidG9rZW4iLCJkZWNvZGVkIiwic2VjcmV0IiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwYXlsb2FkIiwiZXJyIiwiY2VkdWxhIiwiVGVsZWZvbm9zIiwiRW1haWwiLCJqc29uIiwiYWxsb3dlZEZpZWxkcyIsInVuZGVmaW5lZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ1cGRhdGUiLCJzZXQiLCJ3aGVyZSIsIkNvZFNvY2lvIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ1cGRhdGVkRmllbGRzIiwiUFVUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/socios/[codSocio]/route.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   haberes: () => (/* binding */ haberes),\n/* harmony export */   prestamos: () => (/* binding */ prestamos),\n/* harmony export */   socios: () => (/* binding */ socios)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/mysql-core */ \"(rsc)/./node_modules/drizzle-orm/view-23898f21.mjs\");\n/* harmony import */ var drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/mysql-core */ \"(rsc)/./node_modules/drizzle-orm/mysql-core/index.mjs\");\n// /lib/db/schema.js\n\n/**\r\n * Tabla: socios\r\n * Contiene información principal del socio\r\n */ const socios = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('socios', {\n    CodSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('CodSocio', {\n        length: 10\n    }).primaryKey(),\n    NombreCompleto: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('NombreCompleto', {\n        length: 255\n    }),\n    NroCtaBanco: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('NroCtaBanco', {\n        length: 20\n    }),\n    Estatus: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Estatus', {\n        length: 1\n    }),\n    FechaIng: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaIng'),\n    PorAporteS: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('PorAporteS', {\n        precision: 10,\n        scale: 2\n    }),\n    PorAporteP: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('PorAporteP', {\n        precision: 10,\n        scale: 2\n    }),\n    SaldoInicial: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('SaldoInicial', {\n        precision: 10,\n        scale: 2\n    }),\n    SaldoActual: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('SaldoActual', {\n        precision: 10,\n        scale: 2\n    }),\n    FecUltimoPrestamo: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FecUltimoPrestamo'),\n    Estado: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.tinyint)('Estado'),\n    Telefonos: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Telefonos', {\n        length: 255\n    }),\n    FechaEgreso: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaEgreso'),\n    FechaRegistro: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('FechaRegistro'),\n    Email: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('Email', {\n        length: 255\n    }),\n    password: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('password', {\n        length: 255\n    }),\n    reset_token: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('reset_token', {\n        length: 255\n    }),\n    reset_token_expires: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.datetime)('reset_token_expires')\n});\n/**\r\n * Tabla: haberes\r\n * Contiene información sobre los aportes y haberes del socio\r\n */ const haberes = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('haberes', {\n    codSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('codSocio', {\n        length: 10\n    }).primaryKey(),\n    aporteS: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteS', {\n        precision: 10,\n        scale: 2\n    }),\n    aporteP: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteP', {\n        precision: 10,\n        scale: 2\n    }),\n    aporteV: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('aporteV', {\n        precision: 10,\n        scale: 2\n    }),\n    retiroH: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('retiroH', {\n        precision: 10,\n        scale: 2\n    }),\n    totalH: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('totalH', {\n        precision: 10,\n        scale: 2\n    })\n});\n/**\r\n * Tabla: prestamos\r\n * Contiene los préstamos del socio\r\n * Puede haber múltiples préstamos por socio\r\n */ const prestamos = (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_0__.v)('prestamos', {\n    id: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('id', {\n        length: 36\n    }).primaryKey(),\n    codSocio: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('codSocio', {\n        length: 10\n    }).notNull(),\n    tipoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.varchar)('tipoPrest', {\n        length: 255\n    }),\n    fechaPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.date)('fechaPrest'),\n    montoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('montoPrest', {\n        precision: 10,\n        scale: 2\n    }),\n    saldoPrest: (0,drizzle_orm_mysql_core__WEBPACK_IMPORTED_MODULE_1__.decimal)('saldoPrest', {\n        precision: 10,\n        scale: 2\n    })\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIvc2NoZW1hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBU1k7QUFFaEM7OztDQUdDLEdBQ00sTUFBTU0sU0FBU04seURBQVVBLENBQUMsVUFBVTtJQUN6Q08sVUFBVU4sK0RBQU9BLENBQUMsWUFBWTtRQUFFTyxRQUFRO0lBQUcsR0FBR0MsVUFBVTtJQUN4REMsZ0JBQWdCVCwrREFBT0EsQ0FBQyxrQkFBa0I7UUFBRU8sUUFBUTtJQUFJO0lBQ3hERyxhQUFhViwrREFBT0EsQ0FBQyxlQUFlO1FBQUVPLFFBQVE7SUFBRztJQUNqREksU0FBU1gsK0RBQU9BLENBQUMsV0FBVztRQUFFTyxRQUFRO0lBQUU7SUFDeENLLFVBQVVYLDREQUFJQSxDQUFDO0lBQ2ZZLFlBQVlYLCtEQUFPQSxDQUFDLGNBQWM7UUFBRVksV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDNURDLFlBQVlkLCtEQUFPQSxDQUFDLGNBQWM7UUFBRVksV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDNURFLGNBQWNmLCtEQUFPQSxDQUFDLGdCQUFnQjtRQUFFWSxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUNoRUcsYUFBYWhCLCtEQUFPQSxDQUFDLGVBQWU7UUFBRVksV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDOURJLG1CQUFtQmxCLDREQUFJQSxDQUFDO0lBQ3hCbUIsUUFBUWpCLCtEQUFPQSxDQUFDO0lBQ2hCa0IsV0FBV3JCLCtEQUFPQSxDQUFDLGFBQWE7UUFBRU8sUUFBUTtJQUFJO0lBQzlDZSxhQUFhckIsNERBQUlBLENBQUM7SUFDbEJzQixlQUFldEIsNERBQUlBLENBQUM7SUFDcEJ1QixPQUFPeEIsK0RBQU9BLENBQUMsU0FBUztRQUFFTyxRQUFRO0lBQUk7SUFDdENrQixVQUFVekIsK0RBQU9BLENBQUMsWUFBWTtRQUFFTyxRQUFRO0lBQUk7SUFDNUNtQixhQUFhMUIsK0RBQU9BLENBQUMsZUFBZTtRQUFFTyxRQUFRO0lBQUk7SUFDbERvQixxQkFBcUJ2QixnRUFBUUEsQ0FBQztBQUNoQyxHQUFHO0FBRUg7OztDQUdDLEdBQ00sTUFBTXdCLFVBQVU3Qix5REFBVUEsQ0FBQyxXQUFXO0lBQzNDOEIsVUFBVTdCLCtEQUFPQSxDQUFDLFlBQVk7UUFBRU8sUUFBUTtJQUFHLEdBQUdDLFVBQVU7SUFDeERzQixTQUFTNUIsK0RBQU9BLENBQUMsV0FBVztRQUFFWSxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUN0RGdCLFNBQVM3QiwrREFBT0EsQ0FBQyxXQUFXO1FBQUVZLFdBQVc7UUFBSUMsT0FBTztJQUFFO0lBQ3REaUIsU0FBUzlCLCtEQUFPQSxDQUFDLFdBQVc7UUFBRVksV0FBVztRQUFJQyxPQUFPO0lBQUU7SUFDdERrQixTQUFTL0IsK0RBQU9BLENBQUMsV0FBVztRQUFFWSxXQUFXO1FBQUlDLE9BQU87SUFBRTtJQUN0RG1CLFFBQVFoQywrREFBT0EsQ0FBQyxVQUFVO1FBQUVZLFdBQVc7UUFBSUMsT0FBTztJQUFFO0FBQ3RELEdBQUc7QUFFSDs7OztDQUlDLEdBQ00sTUFBTW9CLFlBQVlwQyx5REFBVUEsQ0FBQyxhQUFhO0lBQy9DcUMsSUFBSXBDLCtEQUFPQSxDQUFDLE1BQU07UUFBRU8sUUFBUTtJQUFHLEdBQUdDLFVBQVU7SUFDNUNxQixVQUFVN0IsK0RBQU9BLENBQUMsWUFBWTtRQUFFTyxRQUFRO0lBQUcsR0FBRzhCLE9BQU87SUFDckRDLFdBQVd0QywrREFBT0EsQ0FBQyxhQUFhO1FBQUVPLFFBQVE7SUFBSTtJQUM5Q2dDLFlBQVl0Qyw0REFBSUEsQ0FBQztJQUNqQnVDLFlBQVl0QywrREFBT0EsQ0FBQyxjQUFjO1FBQUVZLFdBQVc7UUFBSUMsT0FBTztJQUFFO0lBQzVEMEIsWUFBWXZDLCtEQUFPQSxDQUFDLGNBQWM7UUFBRVksV0FBVztRQUFJQyxPQUFPO0lBQUU7QUFDOUQsR0FBRyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxFZGdhciBKIFJvamFzIExcXGRldlxcY2FwcmVzLXdlYlxcbGliXFxkYlxcc2NoZW1hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9saWIvZGIvc2NoZW1hLmpzXHJcblxyXG5pbXBvcnQge1xyXG4gIG15c3FsVGFibGUsXHJcbiAgdmFyY2hhcixcclxuICBkYXRlLFxyXG4gIGRlY2ltYWwsXHJcbiAgdGlueWludCxcclxuICBkYXRldGltZSxcclxufSBmcm9tICdkcml6emxlLW9ybS9teXNxbC1jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBUYWJsYTogc29jaW9zXHJcbiAqIENvbnRpZW5lIGluZm9ybWFjacOzbiBwcmluY2lwYWwgZGVsIHNvY2lvXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc29jaW9zID0gbXlzcWxUYWJsZSgnc29jaW9zJywge1xyXG4gIENvZFNvY2lvOiB2YXJjaGFyKCdDb2RTb2NpbycsIHsgbGVuZ3RoOiAxMCB9KS5wcmltYXJ5S2V5KCksXHJcbiAgTm9tYnJlQ29tcGxldG86IHZhcmNoYXIoJ05vbWJyZUNvbXBsZXRvJywgeyBsZW5ndGg6IDI1NSB9KSxcclxuICBOcm9DdGFCYW5jbzogdmFyY2hhcignTnJvQ3RhQmFuY28nLCB7IGxlbmd0aDogMjAgfSksXHJcbiAgRXN0YXR1czogdmFyY2hhcignRXN0YXR1cycsIHsgbGVuZ3RoOiAxIH0pLFxyXG4gIEZlY2hhSW5nOiBkYXRlKCdGZWNoYUluZycpLFxyXG4gIFBvckFwb3J0ZVM6IGRlY2ltYWwoJ1BvckFwb3J0ZVMnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIFBvckFwb3J0ZVA6IGRlY2ltYWwoJ1BvckFwb3J0ZVAnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIFNhbGRvSW5pY2lhbDogZGVjaW1hbCgnU2FsZG9JbmljaWFsJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBTYWxkb0FjdHVhbDogZGVjaW1hbCgnU2FsZG9BY3R1YWwnLCB7IHByZWNpc2lvbjogMTAsIHNjYWxlOiAyIH0pLFxyXG4gIEZlY1VsdGltb1ByZXN0YW1vOiBkYXRlKCdGZWNVbHRpbW9QcmVzdGFtbycpLFxyXG4gIEVzdGFkbzogdGlueWludCgnRXN0YWRvJyksXHJcbiAgVGVsZWZvbm9zOiB2YXJjaGFyKCdUZWxlZm9ub3MnLCB7IGxlbmd0aDogMjU1IH0pLFxyXG4gIEZlY2hhRWdyZXNvOiBkYXRlKCdGZWNoYUVncmVzbycpLFxyXG4gIEZlY2hhUmVnaXN0cm86IGRhdGUoJ0ZlY2hhUmVnaXN0cm8nKSxcclxuICBFbWFpbDogdmFyY2hhcignRW1haWwnLCB7IGxlbmd0aDogMjU1IH0pLFxyXG4gIHBhc3N3b3JkOiB2YXJjaGFyKCdwYXNzd29yZCcsIHsgbGVuZ3RoOiAyNTUgfSksIC8vIENvbnRyYXNlw7FhIGRlbCBzb2Npb1xyXG4gIHJlc2V0X3Rva2VuOiB2YXJjaGFyKCdyZXNldF90b2tlbicsIHsgbGVuZ3RoOiAyNTUgfSksXHJcbiAgcmVzZXRfdG9rZW5fZXhwaXJlczogZGF0ZXRpbWUoJ3Jlc2V0X3Rva2VuX2V4cGlyZXMnKSwgLy8g4pyFIGRhdGV0aW1lLCBubyB2YXJjaGFyXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRhYmxhOiBoYWJlcmVzXHJcbiAqIENvbnRpZW5lIGluZm9ybWFjacOzbiBzb2JyZSBsb3MgYXBvcnRlcyB5IGhhYmVyZXMgZGVsIHNvY2lvXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGFiZXJlcyA9IG15c3FsVGFibGUoJ2hhYmVyZXMnLCB7XHJcbiAgY29kU29jaW86IHZhcmNoYXIoJ2NvZFNvY2lvJywgeyBsZW5ndGg6IDEwIH0pLnByaW1hcnlLZXkoKSxcclxuICBhcG9ydGVTOiBkZWNpbWFsKCdhcG9ydGVTJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBhcG9ydGVQOiBkZWNpbWFsKCdhcG9ydGVQJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBhcG9ydGVWOiBkZWNpbWFsKCdhcG9ydGVWJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICByZXRpcm9IOiBkZWNpbWFsKCdyZXRpcm9IJywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICB0b3RhbEg6IGRlY2ltYWwoJ3RvdGFsSCcsIHsgcHJlY2lzaW9uOiAxMCwgc2NhbGU6IDIgfSksXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIFRhYmxhOiBwcmVzdGFtb3NcclxuICogQ29udGllbmUgbG9zIHByw6lzdGFtb3MgZGVsIHNvY2lvXHJcbiAqIFB1ZWRlIGhhYmVyIG3Dumx0aXBsZXMgcHLDqXN0YW1vcyBwb3Igc29jaW9cclxuICovXHJcbmV4cG9ydCBjb25zdCBwcmVzdGFtb3MgPSBteXNxbFRhYmxlKCdwcmVzdGFtb3MnLCB7XHJcbiAgaWQ6IHZhcmNoYXIoJ2lkJywgeyBsZW5ndGg6IDM2IH0pLnByaW1hcnlLZXkoKSwgLy8gVVVJRFxyXG4gIGNvZFNvY2lvOiB2YXJjaGFyKCdjb2RTb2NpbycsIHsgbGVuZ3RoOiAxMCB9KS5ub3ROdWxsKCksXHJcbiAgdGlwb1ByZXN0OiB2YXJjaGFyKCd0aXBvUHJlc3QnLCB7IGxlbmd0aDogMjU1IH0pLFxyXG4gIGZlY2hhUHJlc3Q6IGRhdGUoJ2ZlY2hhUHJlc3QnKSxcclxuICBtb250b1ByZXN0OiBkZWNpbWFsKCdtb250b1ByZXN0JywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxuICBzYWxkb1ByZXN0OiBkZWNpbWFsKCdzYWxkb1ByZXN0JywgeyBwcmVjaXNpb246IDEwLCBzY2FsZTogMiB9KSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJteXNxbFRhYmxlIiwidmFyY2hhciIsImRhdGUiLCJkZWNpbWFsIiwidGlueWludCIsImRhdGV0aW1lIiwic29jaW9zIiwiQ29kU29jaW8iLCJsZW5ndGgiLCJwcmltYXJ5S2V5IiwiTm9tYnJlQ29tcGxldG8iLCJOcm9DdGFCYW5jbyIsIkVzdGF0dXMiLCJGZWNoYUluZyIsIlBvckFwb3J0ZVMiLCJwcmVjaXNpb24iLCJzY2FsZSIsIlBvckFwb3J0ZVAiLCJTYWxkb0luaWNpYWwiLCJTYWxkb0FjdHVhbCIsIkZlY1VsdGltb1ByZXN0YW1vIiwiRXN0YWRvIiwiVGVsZWZvbm9zIiwiRmVjaGFFZ3Jlc28iLCJGZWNoYVJlZ2lzdHJvIiwiRW1haWwiLCJwYXNzd29yZCIsInJlc2V0X3Rva2VuIiwicmVzZXRfdG9rZW5fZXhwaXJlcyIsImhhYmVyZXMiLCJjb2RTb2NpbyIsImFwb3J0ZVMiLCJhcG9ydGVQIiwiYXBvcnRlViIsInJldGlyb0giLCJ0b3RhbEgiLCJwcmVzdGFtb3MiLCJpZCIsIm5vdE51bGwiLCJ0aXBvUHJlc3QiLCJmZWNoYVByZXN0IiwibW9udG9QcmVzdCIsInNhbGRvUHJlc3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db/schema.js\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_socios_codSocio_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/socios/[codSocio]/route.js */ \"(rsc)/./app/api/socios/[codSocio]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/socios/[codSocio]/route\",\n        pathname: \"/api/socios/[codSocio]\",\n        filename: \"route\",\n        bundlePath: \"app/api/socios/[codSocio]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Edgar J Rojas L\\\\dev\\\\capres-web\\\\app\\\\api\\\\socios\\\\[codSocio]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_socios_codSocio_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzb2Npb3MlMkYlNUJjb2RTb2NpbyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc29jaW9zJTJGJTVCY29kU29jaW8lNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzb2Npb3MlMkYlNUJjb2RTb2NpbyU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcc29jaW9zXFxcXFtjb2RTb2Npb11cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NvY2lvcy9bY29kU29jaW9dL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc29jaW9zL1tjb2RTb2Npb11cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NvY2lvcy9bY29kU29jaW9dL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcc29jaW9zXFxcXFtjb2RTb2Npb11cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/jose","vendor-chunks/iconv-lite","vendor-chunks/drizzle-orm","vendor-chunks/dotenv","vendor-chunks/aws-ssl-profiles","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/lru-cache","vendor-chunks/long","vendor-chunks/safer-buffer","vendor-chunks/named-placeholders","vendor-chunks/lru.min","vendor-chunks/is-property","vendor-chunks/generate-function","vendor-chunks/denque"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&page=%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsocios%2F%5BcodSocio%5D%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();