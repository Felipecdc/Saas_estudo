"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vercel-build.ts
var child_process_1 = require("child_process");
try {
    // Execute o comando prisma generate durante o build
    (0, child_process_1.execSync)('prisma generate');
}
catch (error) {
    console.error('Erro ao gerar o Prisma Client:', error.message);
    process.exit(1);
}
