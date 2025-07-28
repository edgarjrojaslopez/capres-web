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
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/login/route.js":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db/index.js\");\n/* harmony import */ var _lib_db_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db/schema */ \"(rsc)/./lib/db/schema.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/alias-cf8e03cd.mjs\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\nconst runtime = 'nodejs';\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nif (!JWT_SECRET) {\n    console.error('❌ ERROR FATAL: JWT_SECRET no está definido');\n}\nasync function POST(req) {\n    try {\n        const { cedula, password } = await req.json();\n        if (!cedula || !password) {\n            return new Response(JSON.stringify({\n                error: {\n                    message: 'Cédula y contraseña requeridas'\n                }\n            }), {\n                status: 400\n            });\n        }\n        const [user] = await _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_lib_db_schema__WEBPACK_IMPORTED_MODULE_1__.socios).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.F)(_lib_db_schema__WEBPACK_IMPORTED_MODULE_1__.socios.CodSocio, cedula));\n        if (!user) {\n            return new Response(JSON.stringify({\n                error: {\n                    message: 'Credenciales inválidas'\n                }\n            }), {\n                status: 401\n            });\n        }\n        let isValid = false;\n        if (user.password.startsWith('$2b$')) {\n            isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].compare(password, user.password);\n        } else {\n            isValid = password === user.password;\n        }\n        if (!isValid) {\n            return new Response(JSON.stringify({\n                error: {\n                    message: 'Credenciales inválidas'\n                }\n            }), {\n                status: 401\n            });\n        }\n        // ✅ Verifica que JWT_SECRET exista\n        if (!JWT_SECRET) {\n            console.error('JWT_SECRET no está definido');\n            return new Response(JSON.stringify({\n                error: {\n                    message: 'Error interno del servidor'\n                }\n            }), {\n                status: 500\n            });\n        }\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n            cedula: user.CodSocio,\n            nombre: user.NombreCompleto\n        }, JWT_SECRET, {\n            expiresIn: '7d'\n        });\n        return new Response(JSON.stringify({\n            token,\n            user: {\n                id: user.CodSocio,\n                nombre: user.NombreCompleto\n            }\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error en login:', error);\n        return new Response(JSON.stringify({\n            error: {\n                message: 'Error interno del servidor'\n            }\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxVQUFVLFNBQVM7QUFFRjtBQUNXO0FBQ1I7QUFDRjtBQUNEO0FBRTlCLE1BQU1NLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVTtBQUV6QyxJQUFJLENBQUNBLFlBQVk7SUFDZkcsUUFBUUMsS0FBSyxDQUFDO0FBQ2hCO0FBRU8sZUFBZUMsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFFM0MsSUFBSSxDQUFDRixVQUFVLENBQUNDLFVBQVU7WUFDeEIsT0FBTyxJQUFJRSxTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2JSLE9BQU87b0JBQUVTLFNBQVM7Z0JBQWlDO1lBQ3JELElBQ0E7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1wQix1Q0FBRUEsQ0FDcEJxQixNQUFNLEdBQ05DLElBQUksQ0FBQ3JCLGtEQUFNQSxFQUNYc0IsS0FBSyxDQUFDckIsOENBQUVBLENBQUNELGtEQUFNQSxDQUFDdUIsUUFBUSxFQUFFWjtRQUU3QixJQUFJLENBQUNRLE1BQU07WUFDVCxPQUFPLElBQUlMLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVIsT0FBTztvQkFBRVMsU0FBUztnQkFBeUI7WUFBRSxJQUM5RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsSUFBSU0sVUFBVTtRQUNkLElBQUlMLEtBQUtQLFFBQVEsQ0FBQ2EsVUFBVSxDQUFDLFNBQVM7WUFDcENELFVBQVUsTUFBTXJCLHdEQUFjLENBQUNTLFVBQVVPLEtBQUtQLFFBQVE7UUFDeEQsT0FBTztZQUNMWSxVQUFVWixhQUFhTyxLQUFLUCxRQUFRO1FBQ3RDO1FBRUEsSUFBSSxDQUFDWSxTQUFTO1lBQ1osT0FBTyxJQUFJVixTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVSLE9BQU87b0JBQUVTLFNBQVM7Z0JBQXlCO1lBQUUsSUFDOUQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLG1DQUFtQztRQUNuQyxJQUFJLENBQUNkLFlBQVk7WUFDZkcsUUFBUUMsS0FBSyxDQUFDO1lBQ2QsT0FBTyxJQUFJTSxTQUNUQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVSLE9BQU87b0JBQUVTLFNBQVM7Z0JBQTZCO1lBQUUsSUFDbEU7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1TLFFBQVF6Qix3REFBUSxDQUNwQjtZQUFFUyxRQUFRUSxLQUFLSSxRQUFRO1lBQUVNLFFBQVFWLEtBQUtXLGNBQWM7UUFBQyxHQUNyRDFCLFlBQ0E7WUFBRTJCLFdBQVc7UUFBSztRQUdwQixPQUFPLElBQUlqQixTQUNUQyxLQUFLQyxTQUFTLENBQUM7WUFDYlc7WUFDQVIsTUFBTTtnQkFBRWEsSUFBSWIsS0FBS0ksUUFBUTtnQkFBRU0sUUFBUVYsS0FBS1csY0FBYztZQUFDO1FBQ3pELElBQ0E7WUFBRVosUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT1YsT0FBTztRQUNkRCxRQUFRQyxLQUFLLENBQUMsbUJBQW1CQTtRQUNqQyxPQUFPLElBQUlNLFNBQ1RDLEtBQUtDLFNBQVMsQ0FBQztZQUFFUixPQUFPO2dCQUFFUyxTQUFTO1lBQTZCO1FBQUUsSUFDbEU7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRWRnYXIgSiBSb2phcyBMXFxkZXZcXGNhcHJlcy13ZWJcXGFwcFxcYXBpXFxhdXRoXFxsb2dpblxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSAnbm9kZWpzJztcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnQC9saWIvZGInO1xyXG5pbXBvcnQgeyBzb2Npb3MgfSBmcm9tICdAL2xpYi9kYi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBlcSB9IGZyb20gJ2RyaXp6bGUtb3JtJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xyXG5cclxuaWYgKCFKV1RfU0VDUkVUKSB7XHJcbiAgY29uc29sZS5lcnJvcign4p2MIEVSUk9SIEZBVEFMOiBKV1RfU0VDUkVUIG5vIGVzdMOhIGRlZmluaWRvJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGNlZHVsYSwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFjZWR1bGEgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgZXJyb3I6IHsgbWVzc2FnZTogJ0PDqWR1bGEgeSBjb250cmFzZcOxYSByZXF1ZXJpZGFzJyB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFt1c2VyXSA9IGF3YWl0IGRiXHJcbiAgICAgIC5zZWxlY3QoKVxyXG4gICAgICAuZnJvbShzb2Npb3MpXHJcbiAgICAgIC53aGVyZShlcShzb2Npb3MuQ29kU29jaW8sIGNlZHVsYSkpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IHsgbWVzc2FnZTogJ0NyZWRlbmNpYWxlcyBpbnbDoWxpZGFzJyB9IH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICBpZiAodXNlci5wYXNzd29yZC5zdGFydHNXaXRoKCckMmIkJykpIHtcclxuICAgICAgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlzVmFsaWQgPSBwYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiB7IG1lc3NhZ2U6ICdDcmVkZW5jaWFsZXMgaW52w6FsaWRhcycgfSB9KSxcclxuICAgICAgICB7IHN0YXR1czogNDAxIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDinIUgVmVyaWZpY2EgcXVlIEpXVF9TRUNSRVQgZXhpc3RhXHJcbiAgICBpZiAoIUpXVF9TRUNSRVQpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignSldUX1NFQ1JFVCBubyBlc3TDoSBkZWZpbmlkbycpO1xyXG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IHsgbWVzc2FnZTogJ0Vycm9yIGludGVybm8gZGVsIHNlcnZpZG9yJyB9IH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICAgIHsgY2VkdWxhOiB1c2VyLkNvZFNvY2lvLCBub21icmU6IHVzZXIuTm9tYnJlQ29tcGxldG8gfSxcclxuICAgICAgSldUX1NFQ1JFVCxcclxuICAgICAgeyBleHBpcmVzSW46ICc3ZCcgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgdXNlcjogeyBpZDogdXNlci5Db2RTb2Npbywgbm9tYnJlOiB1c2VyLk5vbWJyZUNvbXBsZXRvIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVuIGxvZ2luOicsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IHsgbWVzc2FnZTogJ0Vycm9yIGludGVybm8gZGVsIHNlcnZpZG9yJyB9IH0pLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJydW50aW1lIiwiZGIiLCJzb2Npb3MiLCJlcSIsImp3dCIsImJjcnlwdCIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiY29uc29sZSIsImVycm9yIiwiUE9TVCIsInJlcSIsImNlZHVsYSIsInBhc3N3b3JkIiwianNvbiIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VyIiwic2VsZWN0IiwiZnJvbSIsIndoZXJlIiwiQ29kU29jaW8iLCJpc1ZhbGlkIiwic3RhcnRzV2l0aCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJub21icmUiLCJOb21icmVDb21wbGV0byIsImV4cGlyZXNJbiIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.js\n");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.js */ \"(rsc)/./app/api/auth/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Edgar J Rojas L\\\\dev\\\\capres-web\\\\app\\\\api\\\\auth\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Edgar_J_Rojas_L_dev_capres_web_app_api_auth_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNFZGdhciUyMEolMjBSb2phcyUyMEwlNUNkZXYlNUNjYXByZXMtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRWRnYXIgSiBSb2phcyBMXFxcXGRldlxcXFxjYXByZXMtd2ViXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxFZGdhciBKIFJvamFzIExcXFxcZGV2XFxcXGNhcHJlcy13ZWJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/drizzle-orm","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/lru-cache","vendor-chunks/dotenv","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CEdgar%20J%20Rojas%20L%5Cdev%5Ccapres-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();