#!/usr/bin/env node
'use strict';

import fs from 'fs'
import path from 'path'
import { Imagens, Videos, Documents} from './util.js'

console.log(fs.existsSync(path.resolve(process.cwd(), 'imagens')))

const dir_imagens = new Imagens()
const dir_videos = new Videos()
const dir_documents = new Documents()

fs.readdir(process.cwd(), {encoding: 'utf8'}, function(err, data){
	if(err) throw new Error(err);
	try{
		data.map(function(file){
			const routerfile = path.resolve(process.cwd(), file)
			const currentStat = fs.statSync(routerfile)
			if(currentStat.isFile()){
				const type = file.match(/\.(\w+)$/)
				switch(type[1].trim()){
					case 'png': 
						dir_imagens.executar(currentStat, routerfile, type)
						break;
					case 'jpg': 
						dir_imagens.executar(currentStat, routerfile, type)
						break;
					case 'pdf':
						dir_documents.executar(currentStat, routerfile, type)
						break;
					case 'docx':
						dir_documents.executar(currentStat, routerfile, type)
						break;
					case 'doc':
						dir_documents.executar(currentStat, routerfile, type)
						break;
					case 'mp4':
						dir_videos.executar(currentStat, routerfile, type)
						break;
					case 'mkv':
						dir_videos.executar(currentStat, routerfile, type)
						break;
				}
				console.log(type[1])
			}
		})
	}catch(err){
		console.log("Error no catch prencipal:", err)
	}	
})




