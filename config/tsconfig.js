
/**
 *
 * typescript configurations
 */


let tsconfig = {
    compilerOptions:{
        module: "ES6",
        strict: true,
        baseUrl: "",
        rootDir: "/src/lib",
        outDir: "dist",
        sourceMap: true,
        declaration: false,
        declarationDir: "/types",
        declarationMap: false,
        preserveConstEnums: true
    },
    include: ["src/lib/*"],
    exclude: ["src/game"]
}

export default tsconfig;