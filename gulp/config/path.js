// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// Путь к папке с результатом. Папка будет создаваться автоматически и файлы из исходной папки src будут обрабатываться и переноситься в папку dist
const buildFolder = "./dist";
// Путь к папке с исходными файлами
const srcFolder = "./src";

// Общий объект, в котором будет храниться вся информация о пути к файлам и папкам
export const path = {
	/*путь к папке /dist с результатом: ${buildFolder} - папка /dist; /files - папка с файлами*/
	build: {
		js: `${buildFolder}/js`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/assets/img`,
		fonts: `${buildFolder}/assets/fonts/`,
		files: `${buildFolder}/files/`
	},
	/*путь к папке /src с исходными файлами которые нужно скопировать: ${srcFolder} - папка с исходниками;/files -
	 папка с файлами; /** - проверяем файлы в любых вложенных папках внутри папки /files; /*.* - проверяет все файлы с
	  любыми расширениями*/
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/assets/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/assets/svgicons/*.svg`
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder, // будет равна папке с результатом
	buildFolder: buildFolder, // сама папка с результатом
	srcFolder: srcFolder, // папка с исходниками
	rootFolder: rootFolder, // название текущей папки проекта
	ftp: `test` // для указания папки на удаленном FTP сервере
};
