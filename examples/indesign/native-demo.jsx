/* Synthetic native demonstration. Set PUBLICATION_DEMO_OUTPUT to a fresh absolute
   directory before evaluation. No customer input, downloads, or font installation. */
(function () {
    function encode(v) {
        if(v===null)return 'null';
        if(typeof v==='string')return '"'+v.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/\t/g,'\\t')+'"';
        if(typeof v==='number'||typeof v==='boolean')return String(v);
        var a=[],k;if(v instanceof Array){for(k=0;k<v.length;k++)a.push(encode(v[k]));return '['+a.join(',')+']';}
        for(k in v)if(v.hasOwnProperty(k))a.push(encode(k)+':'+encode(v[k]));return '{'+a.join(',')+'}';
    }
    function put(file,text){file.encoding='UTF-8';if(!file.open('w'))throw Error('Cannot write output');file.write(text);file.close();}
    function ids(){var a=[];for(var i=0;i<app.documents.length;i++)a.push(app.documents[i].id);return a.join(',');}
    if(typeof PUBLICATION_DEMO_OUTPUT!=='string'||!PUBLICATION_DEMO_OUTPUT)throw Error('Provide a fresh absolute PUBLICATION_DEMO_OUTPUT path');
    if(!/^(?:[A-Za-z]:[\\\/]|\/)/.test(PUBLICATION_DEMO_OUTPUT))throw Error('Output must be absolute');
    var out=Folder(PUBLICATION_DEMO_OUTPUT);if(out.exists)throw Error('Output exists; refusing to overwrite');
    if(!out.parent.exists||!out.create())throw Error('Create an approved parent directory first');
    var oldUI=app.scriptPreferences.userInteractionLevel,oldRange=app.pdfExportPreferences.pageRange,
        oldView=app.pdfExportPreferences.viewPDF,oldSpreads=app.pdfExportPreferences.exportReaderSpreads,
        oldBleed=app.pdfExportPreferences.useDocumentBleedWithPDF;
    var result={ok:false,synthetic:true,version:String(app.version),existing_ids_before:ids()},doc=null,opened=null;
    var paras=[
      '这是一份自编的排版演示材料，文章、栏目和图形均为合成内容，不对应任何真实杂志社。本例只用于检查本机软件调用、串栏续排、保存重开和PDF导出，不构成正式出版物，也不证明其他刊物已经完成验收。',
      '接到新刊任务后，先核实来稿版本与采用范围。原稿、修订稿和审阅稿分别保存，图片与图注建立对应关系。缺失的字段如实记录，不把上一家刊物的字体、开本、图数和颜色要求当作新项目的默认答案。',
      '试排应覆盖真实困难点，包括长标题、段落续排、图片附近的文字和特殊标点。少量具有代表性的完整文章，比大量没有正文的占位页面更能说明工作路线。具体试排页数根据材料复杂度决定，不为凑数增加无关步骤。',
      '软件执行必须对应真实文件。连接应用、编辑原生文档、保存后关闭重开，以及导出PDF，是可以分别观察的阶段。记录应说明每一步实际发生了什么，不能用一份脚本或一个文件名代替成功输出的证据。',
      '修改标题和图片后需要检查整篇关联页面。文字框容量的变化可能影响下一栏、下一页及后续页码。应先检查内容完整和阅读顺序，再调整允许的布局变量，不能未经决定删去文字或压缩已经锁定的正文样式。',
      '图片的有效分辨率取决于实际像素和版面上的放置尺寸。导出面板填写的数值不能增加原图细节，关闭降采样也不等于已经实现无损压缩。应检查实际输出中的图像尺寸、压缩方式、边界和颜色。',
      '字体名称正确不等于字形一定正确。原生保存重开和最终页面都要核对缺字、替字与溢文。可编辑文字、正常字体嵌入和轮廓文字分别记录；客户需要曲线交付时，应保留可改字母稿并另存副本。',
      '审阅意见应绑定具体稿号和页范围。编辑认可设计、接收方打开源文件、印厂核对工艺，以及数字平台接收，分别需要相应证据。任何一个环节的成功都不能自动替代其他环节，也不能扩大为整期质量百分比。',
      '交付包按实际用途组织。可编辑源、审阅PDF、数字提交候选及印前候选有各自说明；在明确命名和接收版本后再形成最终包。文件清单与校验值帮助核对传递过程，但哈希一致本身不是设计或印刷验收。',
      '本演示结束后，应检查第二页是否收到同一故事的后续文字，四个文字框的阅读顺序是否正确，并比较保存前后的全文。自编内容和示例结果可以用于方法讨论；真实客户资料只有另获明确授权才能公开展示。'
    ];
    var source=paras.join('\r');
    try {
        app.scriptPreferences.userInteractionLevel=UserInteractionLevels.NEVER_INTERACT;
        var choices=['Microsoft YaHei\tRegular','微软雅黑\tRegular','Microsoft YaHei UI\tRegular'],font=null;
        for(var z=0;z<choices.length;z++){var f=app.fonts.itemByName(choices[z]);if(f.isValid){font=f;break;}}
        if(!font)throw Error('Demonstration requires an available Microsoft YaHei Regular font; do not auto-install');
        doc=app.documents.add(false);doc.documentPreferences.properties={pageWidth:'210mm',pageHeight:'297mm',facingPages:false,pagesPerDocument:2};
        var title=doc.pages[0].textFrames.add();title.geometricBounds=['19mm','18mm','36mm','192mm'];title.contents='新刊委托｜合成试排';title.parentStory.appliedFont=font;title.parentStory.pointSize=24;title.parentStory.leading=30;
        var subtitle=doc.pages[0].textFrames.add();subtitle.geometricBounds=['39mm','18mm','51mm','192mm'];subtitle.contents='双栏续排 · 原生保存重开 · 实际PDF核对';subtitle.parentStory.appliedFont=font;subtitle.parentStory.pointSize=10;subtitle.parentStory.leading=15;
        var frames=[],bounds=[['61mm','18mm','158mm','102mm'],['61mm','108mm','158mm','192mm'],['35mm','18mm','258mm','102mm'],['35mm','108mm','258mm','192mm']];
        for(var n=0;n<4;n++){var fr=doc.pages[n<2?0:1].textFrames.add();fr.geometricBounds=bounds[n];frames.push(fr);if(n>0)frames[n-1].nextTextFrame=fr;}
        frames[0].contents=source;var story=frames[0].parentStory;story.appliedFont=font;story.pointSize=10.5;story.leading=17;story.paragraphs.everyItem().spaceAfter=5;
        var label=doc.pages[0].textFrames.add();label.geometricBounds=['178mm','18mm','190mm','192mm'];label.contents='工作顺序 / 合成示意';label.parentStory.appliedFont=font;label.parentStory.pointSize=12;
        var names=['接稿','试排','审校','交付'];
        for(var j=0;j<4;j++){var left=18+j*45;var box=doc.pages[0].rectangles.add();box.geometricBounds=['200mm',left+'mm','233mm',(left+39)+'mm'];box.fillColor=doc.swatches.itemByName('Black');box.fillTint=10+j*12;box.strokeWeight=0;var tx=doc.pages[0].textFrames.add();tx.geometricBounds=['211mm',(left+6)+'mm','225mm',(left+35)+'mm'];tx.contents=names[j];tx.parentStory.appliedFont=font;tx.parentStory.pointSize=13;}
        for(var pg=0;pg<2;pg++){var ft=doc.pages[pg].textFrames.add();ft.geometricBounds=['280mm','18mm','288mm','192mm'];ft.contents='DEMO / SYNTHETIC    '+String(pg+1)+' / 2';ft.parentStory.appliedFont=font;ft.parentStory.pointSize=8;}
        doc.recompose();result.font=font.name;result.story_characters=story.contents.length;result.story_matches=story.contents===source;result.overflow=story.overflows;result.frame_characters=[];
        for(var k=0;k<4;k++)result.frame_characters.push(frames[k].characters.length);
        if(story.overflows||!result.story_matches||frames[2].characters.length===0)throw Error('Trial must have complete text and actual second-page continuation');
        var snapshots=[];for(var st=0;st<doc.stories.length;st++)snapshots.push(doc.stories[st].contents);
        var indd=File(out.fsName+'/synthetic-trial.indd'),pdf=File(out.fsName+'/synthetic-trial.pdf');
        doc.save(indd);doc.close(SaveOptions.NO);doc=null;opened=app.open(indd,false);
        result.reopened_text_matches=opened.stories.length===snapshots.length;for(var s=0;s<snapshots.length;s++)if(opened.stories[s].contents!==snapshots[s])result.reopened_text_matches=false;
        result.reopened_overflow=false;for(var a=0;a<opened.stories.length;a++)if(opened.stories[a].overflows)result.reopened_overflow=true;
        app.pdfExportPreferences.pageRange=PageRange.ALL_PAGES;app.pdfExportPreferences.viewPDF=false;app.pdfExportPreferences.exportReaderSpreads=false;app.pdfExportPreferences.useDocumentBleedWithPDF=false;
        opened.exportFile(ExportFormat.PDF_TYPE,pdf,false);result.pages=opened.pages.length;opened.close(SaveOptions.NO);opened=null;
        put(File(out.fsName+'/synthetic-source.txt'),source);result.ok=result.reopened_text_matches&&!result.reopened_overflow&&indd.exists&&pdf.exists;
    } catch(e){result.error=String(e.message||e);}
    finally {
        if(opened&&opened.isValid)opened.close(SaveOptions.NO);if(doc&&doc.isValid)doc.close(SaveOptions.NO);
        app.pdfExportPreferences.pageRange=oldRange;app.pdfExportPreferences.viewPDF=oldView;app.pdfExportPreferences.exportReaderSpreads=oldSpreads;app.pdfExportPreferences.useDocumentBleedWithPDF=oldBleed;
        app.scriptPreferences.userInteractionLevel=oldUI;result.existing_ids_after=ids();result.existing_documents_preserved=result.existing_ids_after===result.existing_ids_before;
        result.settings_restored=app.scriptPreferences.userInteractionLevel===oldUI&&app.pdfExportPreferences.pageRange===oldRange&&app.pdfExportPreferences.viewPDF===oldView&&app.pdfExportPreferences.exportReaderSpreads===oldSpreads&&app.pdfExportPreferences.useDocumentBleedWithPDF===oldBleed;
    }
    result.ok=result.ok&&result.existing_documents_preserved&&result.settings_restored;put(File(out.fsName+'/receipt.json'),encode(result));return encode(result);
}());
