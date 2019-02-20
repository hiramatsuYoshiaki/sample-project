# sample-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#vue-cli でプロジェクトを作成して GitHub へ Push するまで  
参考ページ　https://www.shookuro.com/entry/2018/11/16/121334  

### Vue プロジェクトを作成する (ローカル)　 
vue create sample-project  

### GitHub にリポジトリを作って Push する  （ＧｉｔＨｕｂ）  
GitHub のトップページから New repository のボタンをクリック。  
リポジトリ名を入力して下のほうにある Create repository ボタンをクリック。   
新しいリポジトリのトップページに移動します。

### Git にコミットする  （ローカル）
git init  
git add -A  
git commit -m 'first commit' 

### GitHubにpushする　（ローカル）  
git remote add origin https://github.com/yyama694/sample-project.git  
git push -u origin master  



#Vue で作成した Web アプリを GitHub Pages で公開  
参考ページ　https://www.shookuro.com/entry/2019/02/02/174655  

### ビルド設定の変更  
vue-cli3 系では設定ファイル vue.config.js を新規で作成する。  
以下の設定を追加する。  
module.exports = {  
  outputDir: 'docs',  
  assetsDir: './',  
  publicPath: './'  
}  
###  ビルドする。  
npm run build  

###  GitHub に Push する  
git add -A  
git commit -m 'build commit'  
git push  

### GitHub プロジェクトの設定変更  
公開するプロジェクト（リポジトリ）のトップページで「Settings」を選択します。  
Settings のページに移動するので、タイトルが GitHub Pages のところまで下にスクロールします。  
Source のところがデフォルトでは None になっています。公開するために変更します。  
今回は master ブランチの /docs ディレクトリを選択します。  
これで master ブランチ /docs 配下の index.html が （ソースだけでなく）Web ページとして公開されるはずです。  
選択したら Save ボタンを押しましょう。  
画面がリフレッシュされますので、再度スクロールして GitHub Pages のところを表示すると、ページの URL が表示されています。   
(10分くらいしないと更新されない)  