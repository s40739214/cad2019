var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week2-5', 'text': 'week2 \n 1.在github建立新倉儲cad2019，並到mde.tw下載2019Fall可攜套件.7z解壓縮到自己的隨身碟裡 \n 2.用git\xa0config\xa0 --global user.name "user name"和git\xa0config\xa0 --global user.email\xa0 "user email"設定自己的名字和email \n 3.將倉儲git clone下來(如果是在學校需要設定proxy) \n 4.用git submodule add指令將子模組下載下來(指令：git submodule add https://github.com/mdecourse/cmsimde.git cmsimde) \n 5.進入倉儲資料夾中tmp>cad2019>cmsimde> up_dir將檔案全選後複製到倉儲資料夾中 \n 6.在cmd視窗切換到cmsimde 資料夾 輸入 python wsgi.py 開啟近端(第一次執行需輸入 python -m pip install flask_cors下載套件) \n 7.到資料夾中找wsgi.py開啟檔案，拉進小白框並按下Go，複製網址 \n 8.成功開啟後就可以開始編輯，編輯完後將網頁轉成靜態頁面，再將檔案push就完成了 \n 9.影片網址： https://youtu.be/vUCi4UbQj1A \n \n week3 \n Solvespace編譯與參數繪圖應用說明 \n 1.先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2.git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 3.需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 4.接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 5.影片網址： https://youtu.be/71CDxwTW_eY \n \n week4 \n \n 完成前三周進度 \n week5 \n \n Solvespace參數繪圖示範 \n 1.進行分組作業，各組每人選一題繪製之零組件 \n 2.錄製操作影片並講解繪製過程 \n 3.影片網址： https://youtu.be/9QzU_-sQmYo \n \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n V-rep網際雙輪車控制模擬示範 \n 1.利用Solvespace繪製雙輪車並組裝 \n 2.錄製繪製過程並上字幕，上傳至Youtube \n ※標題為：機械設計工程系-電腦輔助設計與實習W6 任務一 參數化零組件繪製 \n 3.影片網址： \n 4.下載V-rep 3.6.1 rev4.7z \n week7 \n solvespace的編譯-納入學號 \n 1.輸入solvespace\\src\\solvespace.cpp \n 2.將 solvespace.cpp拉進小白框並搜尋GPL再新增is compiled by 學號 \n 3.再到小黑框輸入tmp\\solvespace\\build\\mingw32-make \n 4.回到資料夾中 tmp\\solvespace\\build\\bin \n 5.打開solvespace→Help→About，確認有自己的學號就完成了 \n 6.影片網址：\xa0 https://youtu.be/3xbo9Aom2Aw \n \n 在零件網頁中自選題目用solvespace繪畫 \n 1.完成圖 \n 2.影片網址： https://youtu.be/QiGQXbg5Xf4 \n \n \n 啟用CMSIMDE的網誌系統 \n 1.先開啟start_mdecourse \n 2.到config內找到pelican.leo並拖曳到leo內 \n 3.到自己網頁的blog 複製網址 \n 4.SISTEURL=自己的網址 並更改學號 \n 5.Local-blog點右鍵 按goto script \n 6.輸入tmp\\cad2019\\~.py的指令 \n 7.到網頁後確認後就完成了 \n 8.影片網址： https://youtu.be/PFgUl8yTgnM \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week12 \n 組員個別整理教科書內容 \n 第 5 章 起草 ( 打草稿 ) \n 本章的目的是為設計人員 / 製圖員提供有關繪圖工具的足夠知識，以創建其設計的基本工程圖。製圖應用程序支持根據 ANSI 標準起草工程模型。在解釋了起草應用程序的基礎之後，我們將逐步介紹起草一些先前創建的模型的方法。 \n \xa0 5.1 概述 \n 製圖應用程序旨在允許您直接從 3D 模型或裝配零件中生成和維護行業標準的工程圖。 Drafting 應用程序還提供了一套 2D 繪圖工具，可滿足 2D 中心設計和佈局要求。通過草繪，可以輕鬆地創建具有正交視圖，剖面圖，導入視圖，輔助視圖，尺寸和其他註釋的工程圖。 \n 繪圖應用程序基於如下圖所示的實體模型創建視圖。 \n \n 製圖應用程序的一些有用功能包括： \n 1 ）選擇第一個視圖後，可以添加其他正交視圖，並通過單擊幾個按鈕將其對齊。 \n 2 ）每個視圖都直接與實體關聯。 因此，當更改實體時，工程圖將隨視圖和尺寸一起直接更新。 \n 3）草稿註釋（尺寸，標籤和帶引線的符號）直接放置在工程圖上，並在更改實體時自動更新。 \n 5.2 創建草稿 \n 1.打開文件 Arborpress_rack.prt \n 2.從 NX 12 界面中，選擇 File → Draft 如圖所示，或選擇 Application 選項卡並選擇 Drafting \n \n 首次打開“繪圖應用程序”時，會彈出一個窗口，要求輸入諸如模板，標準尺寸或自定義尺寸，單位和投影角度。 \n 1. 尺寸 \n 尺寸允許選擇圖紙的尺寸。可以創建一些標準模板，有幾種標準尺寸的圖紙可選擇。如果圖紙不適合標準尺寸的圖紙，還可以定義“自定義”尺寸的圖紙。 \n 2. 預習 \n 這顯示了模板的整體設計。 \n 3. 單位 \n 單位遵循父 3-D 模型的默認單位。如果從“製圖應用程序”開始，則需要在此處選擇單位。 \n 4. 投影 \n 可以選擇“第一角度”或“第三角度”投影方法。 \n 1) \n \xa02) \n 3、4) \n 要開始使用“繪圖應用程序”，從創建“標準尺寸”圖紙開始： \n 1.單擊標準尺寸單選按鈕 \n 2.在尺寸窗口的下拉菜單中，選擇尺寸為 11 x 17 的圖紙 B 。 \n 3.使用下拉菜單並在“比例”下選擇“自定義比例”，將比例更改為 1:25 。 \n 4.點擊確定 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '哈囉 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};