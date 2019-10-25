var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Week2-9', 'text': 'week1 \n 中秋連假 \n', 'tags': '', 'url': 'Week2-9.html'}, {'title': 'week2', 'text': '1.在github建立新倉儲cad2019，並到mde.tw下載2019Fall可攜套件.7z解壓縮到自己的隨身碟裡 \n 2.用git\xa0config\xa0 --global user.name "user name"和git\xa0config\xa0 --global user.email\xa0 "user email"設定自己的名字和email \n 3.將倉儲git clone下來(如果是在學校需要設定proxy) \n 4.用git submodule add指令將子模組下載下來(指令：git submodule add https://github.com/mdecourse/cmsimde.git cmsimde) \n 5.進入倉儲資料夾中tmp>cad2019>cmsimde> up_dir將檔案全選後複製到倉儲資料夾中 \n 6.在cmd視窗切換到cmsimde 資料夾 輸入 python wsgi.py 開啟近端(第一次執行需輸入 python -m pip install flask_cors下載套件) \n 7.到資料夾中找wsgi.py開啟檔案，拉進小白框並按下Go，複製網址 \n 8.成功開啟後就可以開始編輯，編輯完後將網頁轉成靜態頁面，再將檔案push就完成了 \n 9.影片網址： https://youtu.be/vUCi4UbQj1A \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': 'Solvespace編譯與參數繪圖應用說明 \n 1.先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2.git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 3.需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 4.接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 5.影片網址： https://youtu.be/71CDxwTW_eY \n \n week4 \n 完成前三周進度 \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week5', 'text': '\n Solvespace編譯與參數繪圖示範 \n 影片連結： https://youtu.be/9QzU_-sQmYo \n \n \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': 'V-rep網際雙輪車控制模擬示範 \n', 'tags': '', 'url': 'week6.html'}]};