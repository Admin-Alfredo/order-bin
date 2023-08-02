import fs from 'fs'
import {promisify} from 'util'
import {resolve} from 'path'

class Directory {
	constructor(type){
		this.files = []
		this.type = type
		this.isAlive = false;
		switch(this.type){
			case 'img': this.dirName = 'imagens'; break;
			case 'doc': this.dirName = 'documentos'; break;
			case 'vid': this.dirName = 'videos'; break;
		}
		
		this.baseDiretory()
		console.log(this.files)
	}
	hasFile(){
		if(this.files.lenght > 0)
			return true
		else return false
	}
	addFile(dir){
		this.files.push(dir)
	}
	baseDiretory(){
		const baseDir = resolve(process.cwd(), this.dirName)
		if(fs.existsSync(baseDir)){
			fs.readdirSync(baseDir)?.forEach((fileLocal) => this.addFile(fileLocal))
			this.isAlive = true;
		}
	}
}
export class Imagens extends Directory{
	constructor(){
		super('img')
	}
	executar(stat, dirFile, type){
		if(this.isAlive){
			
		}else {
			fs.mkdirSync(resolve(process.cwd(), dirName))
		}
	}
}
export class Documents extends Directory{
	constructor(){
		super('doc')
	}
	executar(){
		
	}
}
export class Videos extends Directory{
	constructor(){
		super('vid')
	}
	executar(){
		
	}
}




