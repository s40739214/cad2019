var tipuesearch = {"pages": [{'title': 'Week', 'text': 'week2-5 \n week6-9 \n week10-14 \n week15-18 \n', 'tags': '', 'url': 'Week.html'}, {'title': 'week2-5', 'text': 'week2 \n 1.在github建立新倉儲cad2019，並到mde.tw下載2019Fall可攜套件.7z解壓縮到自己的隨身碟裡 \n 2.用git\xa0config\xa0 --global user.name "user name"和git\xa0config\xa0 --global user.email\xa0 "user email"設定自己的名字和email \n 3.將倉儲git clone下來(如果是在學校需要設定proxy) \n 4.用git submodule add指令將子模組下載下來(指令：git submodule add https://github.com/mdecourse/cmsimde.git cmsimde) \n 5.進入倉儲資料夾中tmp>cad2019>cmsimde> up_dir將檔案全選後複製到倉儲資料夾中 \n 6.在cmd視窗切換到cmsimde 資料夾 輸入 python wsgi.py 開啟近端(第一次執行需輸入 python -m pip install flask_cors下載套件) \n 7.到資料夾中找wsgi.py開啟檔案，拉進小白框並按下Go，複製網址 \n 8.成功開啟後就可以開始編輯，編輯完後將網頁轉成靜態頁面，再將檔案push就完成了 \n 9.影片網址： https://youtu.be/vUCi4UbQj1A \n \n week3 \n Solvespace編譯與參數繪圖應用說明 \n 1.先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2.git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 3.需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 4.接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 5.影片網址： https://youtu.be/71CDxwTW_eY \n \n week4 \n \n 完成前三周進度 \n week5 \n \n Solvespace參數繪圖示範 \n 1.進行分組作業，各組每人選一題繪製之零組件 \n 2.錄製操作影片並講解繪製過程 \n 3.影片網址： https://youtu.be/9QzU_-sQmYo \n \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n V-rep網際雙輪車控制模擬示範 \n 1.利用Solvespace繪製雙輪車並組裝 \n 2.錄製繪製過程並上字幕，上傳至Youtube \n ※標題為：機械設計工程系-電腦輔助設計與實習W6 任務一 參數化零組件繪製 \n 3.影片網址： \n 4.下載V-rep 3.6.1 rev4.7z \n week7 \n solvespace的編譯-納入學號 \n 1.輸入solvespace\\src\\solvespace.cpp \n 2.將 solvespace.cpp拉進小白框並搜尋GPL再新增is compiled by 學號 \n 3.再到小黑框輸入tmp\\solvespace\\build\\mingw32-make \n 4.回到資料夾中 tmp\\solvespace\\build\\bin \n 5.打開solvespace→Help→About，確認有自己的學號就完成了 \n 6.影片網址：\xa0 https://youtu.be/3xbo9Aom2Aw \n \n 在零件網頁中自選題目用solvespace繪畫 \n 1.完成圖 \n 2.影片網址： https://youtu.be/QiGQXbg5Xf4 \n \n \n 啟用CMSIMDE的網誌系統 \n 1.先開啟start_mdecourse \n 2.到config內找到pelican.leo並拖曳到leo內 \n 3.到自己網頁的blog 複製網址 \n 4.SISTEURL=自己的網址 並更改學號 \n 5.Local-blog點右鍵 按goto script \n 6.輸入tmp\\cad2019\\~.py的指令 \n 7.到網頁後確認後就完成了 \n 8.影片網址： https://youtu.be/PFgUl8yTgnM \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week12 \n 組員個別整理教科書內容 \n 第 5 章 起草 ( 打草稿 ) \n 本章的目的是為設計人員 / 製圖員提供有關繪圖工具的足夠知識，以創建其設計的基本工程圖。製圖應用程序支持根據 ANSI 標準起草工程模型。在解釋了起草應用程序的基礎之後，我們將逐步介紹起草一些先前創建的模型的方法。 \n \xa0 5.1 概述 \n 製圖應用程序旨在允許您直接從 3D 模型或裝配零件中生成和維護行業標準的工程圖。 Drafting 應用程序還提供了一套 2D 繪圖工具，可滿足 2D 中心設計和佈局要求。通過草繪，可以輕鬆地創建具有正交視圖，剖面圖，導入視圖，輔助視圖，尺寸和其他註釋的工程圖。 \n 繪圖應用程序基於如下圖所示的實體模型創建視圖。 \n \n 製圖應用程序的一些有用功能包括： \n 1 ）選擇第一個視圖後，可以添加其他正交視圖，並通過單擊幾個按鈕將其對齊。 \n 2 ）每個視圖都直接與實體關聯。 因此，當更改實體時，工程圖將隨視圖和尺寸一起直接更新。 \n 3）草稿註釋（尺寸，標籤和帶引線的符號）直接放置在工程圖上，並在更改實體時自動更新。 \n 5.2 創建草稿 \n 1.打開文件 Arborpress_rack.prt \n 2.從 NX 12 界面中，選擇 File → Draft 如圖所示，或選擇 Application 選項卡並選擇 Drafting \n \n 首次打開“繪圖應用程序”時，會彈出一個窗口，要求輸入諸如模板，標準尺寸或自定義尺寸，單位和投影角度。 \n 1. 尺寸 \n 尺寸允許選擇圖紙的尺寸。可以創建一些標準模板，有幾種標準尺寸的圖紙可選擇。如果圖紙不適合標準尺寸的圖紙，還可以定義“自定義”尺寸的圖紙。 \n 2. 預習 \n 這顯示了模板的整體設計。 \n 3. 單位 \n 單位遵循父 3-D 模型的默認單位。如果從“製圖應用程序”開始，則需要在此處選擇單位。 \n 4. 投影 \n 可以選擇“第一角度”或“第三角度”投影方法。 \n 1) \n \xa02) \n 3、4) \n 要開始使用“繪圖應用程序”，從創建“標準尺寸”圖紙開始： \n 1.單擊標準尺寸單選按鈕 \n 2.在尺寸窗口的下拉菜單中，選擇尺寸為 11 x 17 的圖紙 B 。 \n 3.使用下拉菜單並在“比例”下選擇“自定義比例”，將比例更改為 1:25 。 \n 4.點擊確定 \n \n 將打開“製圖應用程序”，並顯示以下屏幕。首先，先看一下“草稿應用程序界面”。 \n \n 將看到一個彈出對話框，它可以幫助我們選擇零件，視圖和其他選項。 \n 1.更改選項和視圖，然後單擊完成 \n 2.選擇插入→視圖→基礎，或在視圖組中單擊基礎視圖 \n 具有“視圖”和“比例”選項的“基本視圖”對話框將隨對象的浮動圖形一起顯示。 \n \n 3.選擇前面的視圖 \n 在屏幕上找到“前視圖”投影。移動鼠標光標，然後單擊要查看的位置。 \n 設置“前視圖”後，將彈出另一個對話框，要求在“圖紙邊界”內屏幕上的任何位置設置其他視圖。 \n 可以通過在第一個視圖上移動光標來找到不同的視圖。 如果要在關閉此文件或更改為其他命令模式後添加任何正交視圖 \n 4.選擇插入→視圖→投影視圖或從“視圖”組中選擇“投影視圖” \n \n 5.如果已關閉“投影視圖”對話框，則可以通過單擊視圖組中的“投影視圖”圖標來重新打開它 \n \n 6.移動光標並單擊以獲取其他視圖 \n 7.單擊“投影視圖”對話框上的“關閉”或按鍵盤上的 <Esc> 鍵以關閉窗口 \n 8.選擇菜單→首選項→起草，或單擊快速訪問工具欄中的圖標以找到起草首選項 \n \n 9.單擊查看選項卡按鈕 \n 10.取消選中顯示邊框上的刻度線，如下圖所示，然後單擊確定。 \n \n 還可以在這裡找到許多其他選項，例如小數位數，隱藏線，角度和螺紋。 \n 例如，可以在製圖首選項→中找到隱藏線的選項→視圖→公共→隱藏線 \n \n 5.3 尺寸 \n 現在，我們要為這些視圖創建尺寸。 可以通過以下兩種方式之一插入尺寸： \n 1.選擇菜單→插入→尺寸 \n 或是 \n 2.單擊尺寸工具欄，如下圖所示 \n \n 3.單擊“點和邊”，移動鼠標並單擊適當的位置以繪製尺寸 \n 此窗口中的圖標有助於更改尺寸的屬性。 \n \n 4.單擊設置按鈕 \n 可以在這裡修改尺寸設置。 出現一個對話框，如下所示。 \n \xa0 第一個列表用於刻字。 這允許用戶證明並選擇幀大小。 \n 在“線條 / 箭頭”部分，您可以更改箭頭線的粗細，箭頭，角度格式等。 \n \n “公差”列表。可以在此處將公差更改為設計值。 \n \n 亦可以在此處修改顯示類型，數字所需的精度和其他類似選項。 \n 下一個圖標是“文本”選項，可用於編輯單位，文本樣式，字體和其他與文本相關的方面。 \n \n 5.在創建的第一個視圖（前視圖）上，單擊機架的左上角，然後單擊右上角 \n \n 將會出現代表這些點之間距離的尺寸。可以通過在屏幕上移動鼠標來放置尺寸的位置。 \n 6.要將尺寸設置到圖紙上，將尺寸放置在視圖上方，然後單擊鼠標左鍵，即使在創建尺寸後，也可以編輯尺寸的屬性。 \n 7.右鍵單擊剛創建的尺寸，然後選擇“設置”或“編輯顯示” \n 8.可以在此處修改字體，顏色，樣式和其他更詳細的信息 \n 9.為所有其他視圖指定尺寸，如下圖所示 \n \n \n 5.4 剖面圖 \n 為同一零件創建一個剖面圖，以顯示孔的深度和輪廓。 \n 1.選擇插入→視圖→截面，或從功能區欄中的視圖組中單擊視圖截面圖標 \n 2.單擊基本視圖底部，如圖所示。 這將顯示帶有兩個箭頭標記的幻影線，以表示剖面的方向（橙色虛線，箭頭指向上方）。 \n \n \n 3.單擊視圖中間，如圖所示。 這將確定剖麵線（剖面）的位置 \n 現在，在視圖周圍移動光標以獲取剖面平面的方向。 保持箭頭垂直向上，並將剖面圖拖動到“基本視圖”的底部。 \n \n 如果有乾擾，請調整尺寸位置。 最終的圖紙頁應如下圖所示。 \n \n \n 5.5 產品和製造信息 \n 產品和製造信息（ PMI ）是 NX 中的重要應用程序之一，它提供用於在 3D 環境中記錄產品的註釋工具。 PMI 應用程序包括一個全面的 3D 註釋環境，允許設計團隊將詳細信息（例如幾何尺寸和公差（ GD ＆ T ），表面光潔度，焊接信息，材料規格，註釋，政府安全信息或專有信息等）共享給 3D 模型。 \n \xa0 在下面的示例中，將打開零件文件，在 PMI 應用程序中的 3D 模型上創建尺寸和註釋，並學習如何將尺寸和註釋繼承到 Drafting 應用程序。 \n \xa0 1.打開文件 Impeller_impeller.prt \n 2.從 NX 12 界面中選擇 File → PMI （打開復選標記） \n \n 這應該在“工具”和“應用程序”選項卡之間創建一個附加的選項卡 PMI 。 \n 選擇“  PMI ”選項卡以進入如下所示的 PMI 應用程序。 \n \n 在此模式下，功能區欄將具有“尺寸”，“註釋”，“自定義符號”，“補充幾何”，“特殊”和“安全標記”組。 每個小組都有幾個選項，可以幫助描述建模的 3D 零件。 例如，“尺寸”組，“表面粗糙度”和“註釋”組中的“標註”的尺寸選項。 \n 3.單擊快速圖標 \n 4.選擇葉輪的端面作為第一對象和第二對象，以插入線性尺寸或單擊“線性”圖標執行相同的任務 \n 5.單擊“尺寸”組中的“徑向”圖標 ，以在葉輪上插入孔和曲面的尺寸 \n 6.單擊補充幾何組中的中心線圖標，然後選擇葉輪的內表面以插入零件的中心線。 \n 7.單擊“註釋”組中的“註釋”圖標以提供任何註釋，或單擊“表面粗糙度”圖標，選擇對象，文本位置和引出線以插入特定的表面粗糙度詳細信息（如果需要） \n PMI 尺寸確定後，葉輪的 Trimetric 視圖將如下所示。 \n \n 8.保存文件，選擇“應用程序”選項卡，然後單擊功能區欄中的“繪圖”圖標 \n 9.按照上一節中介紹的類似步驟為 3D 零件創建工程圖圖紙 \n 在創建圖紙的過程中，在“視圖創建嚮導”中，選擇“繼承 PMI ”選項，然後選擇“與圖形對齊（整個零件）”，然後選中“將 PMI 繼承到圖形”選項。這將繼承 3D 模型的尺寸，並顯示在圖紙上， \n \n 5.6 例子 \n 1.打開模型 Impeller_hexa-bolt.prt \n 2.選擇文件→起草或在應用程序選項卡中選擇起草 \n 3.在圖紙窗口中，選擇圖紙 E-34 X 44 並將比例值更改為 8.0 ： 1.0 \n 4.點擊確定 \n 5.選擇插入→視圖→基本視圖或單擊基本視圖圖標 \n 6.通過重複上一個示例中說明的相同步驟添加前視圖 \n 7.添加正交視圖，包括右視圖和頂視圖 \n 8.選擇首選項→起草 \n 9.取消選中視圖選項卡下顯示邊框旁邊的框 \n 屏幕將具有以下三個視圖。 \n \n \n \xa0 \n 為了可視化隱藏線， \n 1.選擇首選項→起草→查看 \n 或者 \n 2.選擇視圖，單擊鼠標右鍵，然後選擇“設置”，如下所示 \n 將彈出一個窗口，其中包含與視圖有關的各種選項。 \n \n 3.單擊隱藏線選項卡 \n 4.如下所示，將“進程隱藏線”更改為“虛線”，然後單擊“確定”。 \n 可以看到如下圖所示的隱藏線。 \n \n 現在，我們將繼續進行尺寸標註。 \n 1.選擇插入→尺寸→線性或單擊“尺寸”組中的“線性尺寸”圖標 \n 2.給出以下所有距離的垂直尺寸 ( 對於線程，我們將使用引導線 ) 。 \n 3.單擊工具欄中顯示的註釋圖標 \n 4.在打開的註釋窗口中，輸入以下文本。可以在符號選項卡上找到 Ø 和度數符 \n \n \n 右手 Ø0.20 x 1.5 螺距 0.05 ，角度 600 ➢在側視圖中單擊螺紋軸，按住鼠標並將“引線”線拖動到視圖旁邊。 放開鼠標，然後再次單擊以放置文本。 \n \n \n \n \n \n \n \n \n \n \n \n \n  5.關閉註釋編輯器 \n \xa0 \n 由於刻字的高度很小，因此我們將擴大字符大小以及箭頭大小。 \n 1..右鍵單擊 Lead 並選擇 Settings \n 2.單擊刻字選項卡 \n 3.在文本參數部分，增加高度以使引線清晰易讀 \n 4.單擊“行 / 箭頭”選項卡 \n 5.在格式部分，增加引線的長度 \n \xa0 現在，我們將添加其他尺寸和視圖。 \n 1.選擇插入→尺寸→徑向或在尺寸組中單擊徑向尺寸 \n 2.在頂視圖中單擊螺栓的圓以給出直徑尺寸 \n 3.單擊插入→視圖→基本視圖，然後單擊基本視圖 \n 4.選擇等軸測視圖並將其放置在屏幕上的某個位置 \n 最終圖如下所示。 記得保存。 \n \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'Note', 'text': '哈囉 \n', 'tags': '', 'url': 'Note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};