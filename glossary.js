// glossaryファイル HTML_CSS_Code
`use strict`
const glossary = [
{target:`DOTYPE宣言`, content:`使用したいHTMLのバージョンをブラウザに伝えるコード`},
{target:`html要素`, content:`Webページのルート要素。<head>と<body>が入る`},
{target:`head要素`, content:`Webページを表示するのにブラウザが必要とするデータ（metadata）が入る`},
{target:`body要素`, content:`画面上に表示させたいすべてのデータが入る`},
{target:`ブロック要素`, content:`画面上で要素は常に改行して始まり、使える幅いっぱいに広がる`},
{target:`インライン要素`, content:`その中身が必要とする幅しかとらない。要素は前の要素と同じ行の中で続く`},
{target:`空要素`, content:`それだけで1つの要素を成し、コンテンツを持たない`},
{target:`コンテンツ`, content:`開始タグと終了タグに囲まれる中身`},
{target:`セレクタ`, content:`スタイルを適用する対象を指定し、プロパティと値で見た目を定義。CSSではケバブケースを使用。基本的な種類としては、要素型、id、クラスなどがある`},
{target:`要素型セレクタ`, content:`HTMLページ内のそのタイプの要素（タグ）すべてを指定`},
{target:`idセレクタ`, content:`HTMLページ内で指定されたidをもつ要素を指定。CSSファイル側で頭に'#'をつける`},
{target:`クラスセレクタ`, content:`HTMLページ内で指定されたクラス名を持つ全ての要素を指定。CSSファイル側で頭に'.'をつける`},
{target:`ボックスモデル`, content:`Webページで各要素は四角い箱として表示。箱にはコンテンツ、パディング、ボーダー、マージンの4つのエリアがある。`},
{target:`CSSレイアウトモード`, content:`ボックス（HTML要素）の位置やサイズを指定`},
{target:`CSSプロパティ`, content:`HTML文書内の要素にスタイルやレイアウトを適用するために使用`},
{target:`コンテンツ`, content:`Webページのテキストや画像など`},
{target:`パディング`, content:`Webページのコンテンツと箱の橋のギャップ`},
{target:`ボーダー`, content:`Webページの箱の四周の境界線。スタイル、幅、色の設定が可能`},
{target:`マージン`, content:`Webページで何も表示されない。周りの要素を外に追いやり入れない`},
{target:`Flowレイアウト`, content:`デフォルトで特に指定しない。HTMLファイルの中の順にしたがってブロック要素が上から下へ、インライン要素が右に流れる`},
{target:`Flexboxレイアウト`, content:`効率よく要素を配置できるレイアウトモード。配置を指定したい要素を含む親要素にflexboxを使うことを設定。そのあとさまざまなプロパティを使って配置を設定。displayで設定`},
{target:`DOM ドキュメント オブジェクト モデル`, content:`HTMLオブジェクトのツリーのこと。documentオブジェクトを介してJavaScriptでアクセスし変更を加えられる`},
{target:`ツリー構造`, content:`HTMLドキュメントの各要素は、階層構造や親子関係、兄弟関係を持つ`},
{target:`親要素`, content:`HTMLドキュメントの上位層の要素`},
{target:`子要素`, content:`HTMLドキュメントの下位層の要素`},
{target:`兄弟要素`, content:`HTMLドキュメントで同じ層にある要素`},
{target:`ノード`, content:`ツリー構造やネットワークなどで、接続や階層構造の要素を指す`},
{target:`documentオブジェクト`, content:`DOMツリーのルートを指す。HTMLファイル全体に相当する`},
{target:`window`, content:`DOM文書を収めるウィンドウを表す`},
{target:`CSS（Cascading Style Sheets）`, content:`HTML要素にどんなスタイルをつけたいかを記述する言語。DOM要素では、すべてのDOM要素のstyleプロパティの中にある`},
{target:`CSSプロパティ`, content:`DOM要素のスタイルプロパティは単なるオブジェクト。更新するには、element.style.*** = ''とする`},
{target:`イベント`, content:`ユーザーのインプットなど、ソフトウェアが認識する何らかのアクション`},
{target:`イベントリスナー`, content:`イベントが発生したら行われる動きを記述した関数を仕組む。イベントが発生したらその関数を呼び出し、関数が実行される。addEventlistener関数`},
{target:`イベントオブジェクト`, content:`イベントリスナーに仕込んだ関数に渡す引数`},
{target:`<!DOCTYPE>`, content:`HTML文書のバージョンと型を定義。<br><*** html>`},
{target:`<html>`, content:`HTML文書全体を囲む。<br><*** lang='ja'>`},
{target:`lang`, content:`言語を指定する属性。<br><html ***='ja'>`},
{target:`<meta>`, content:`メタデータを指定。<br><*** charset='UTF-8'>`},
{target:`charset`, content:`文字エンコーディングを指定する属性。<br><meta ***='UTF-8'>`},
{target:`name`, content:`メタデータやコントロールの名前を指定する属性。<br><meta ***='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>`},
{target:`content`, content:`name属性で指定されたメタタグの内容を指定する属性。<br> <meta name='theme-color' ***='#000000'>`},
{target:`<link>`, content:`外部リソースを読み込む。<br><*** rel='stylesheet' type='text/css' href='style.css'>`},
{target:`<a>`, content:`ハイパーテキストをリンク。<br><*** href='https://example.com'>Visit Example</***>`},
{target:`rel`, content:`リンク先との関係を指定する属性。<br><link ***='stylesheet' href='styles.css'>`},
{target:`href`, content:`ハイパーリンク先を指定する属性。<br><a ***='https://example.com'>Visit Example</a>`},
{target:`<script>`, content:`JavaScriptコードを挿入。<br><*** type='text/javascript' src='script.js'></***>`},
{target:`type`, content:`リンク先やスクリプトのタイプを指定する属性。<br><script ***='text/javascript' src='script.js'></script>`},
{target:`<title>`, content:`ページのタイトルを指定。<br><***>Document</***>`},
{target:`<body>`, content:`ページの本文を含む。<br><***>...</***>`},
{target:`<div>`, content:`ブロック要素でコンテンツをグループ化。<br><*** class='container'>...</***>`},
{target:`<h1>～<h6>`, content:`見出しを定義。<br><***>This is a Heading</***>`},
{target:`<p>`, content:`段落を定義。<br><***>This is a paragraph.</***>`},
{target:`<nav>`, content:`ウェブページ内でユーザーがサイトを効果的に移動し、目的の情報にアクセスするのに役立つナビゲーションコンテンツを定義。<br><***>...</***>`},
{target:`<ul>`, content:`箇条書きリストを定義。<br><***><li>Item 1</li><li>Item 2</li></***>`},
{target:`<ol>`, content:`番号付きリストを定義。<br><***><li>Item 1</li><li>Item 2</li></***>`},
{target:`<li>`, content:`リストアイテムを定義。<br><***>Item 1</***>`},
{target:`<img>`, content:`画像を表示。<br><*** src='image.jpg' alt='Description'>`},
{target:`<button>`, content:`ボタンを定義。<br><*** onclick='myFunction()'>Click me</***>`},
{target:`<em>`, content:`強調を表す斜体のテキスト。<br><***>This is emphasized text.</***>`},
{target:`<strong>`, content:`強い強調を表す太字のテキスト。<br><***>This is strong emphasized text.</***>`},
{target:`<span>`, content:`スタイルやイベントのためのインライン要素。<br><*** style='color: red;'>Red text</***>`},
{target:`<br>`, content:`改行を挿入。<br><p>First line<***>Second line</p>`},
{target:`id`, content:`要素に一意の識別子を付与。<br><div ***='main-content'>...</div>`},
{target:`class`, content:`複数の要素に同じスタイルを適用するためのクラス。<br><p ***='highlight'>This is highlighted text.</p>`},
{target:`<select>`, content:`ユーザーがドロップダウンメニューから選択できるオプションのリストを表示するために使用。<br><*** name='fruits'><option value='apple'>apple</option></***>`},
{target:`name`, content:`要素の名前を指定。<br><select ***='fruits'>...</select>`},
{target:`<option>`, content:`ドロップダウンリストの選択肢を定義。<br><*** value='volvo'>Volvo</option>`},
{target:`value`, content:`この選択肢が選択された場合に送信される値を指定。<br><option ***='apple'>apple</option>`},
{target:`<input>`, content:`ユーザーがテキストを入力できるフィールドを作成。<br><*** type='text' name='username' placeholder='Enter your username'>`},
{target:`placeholder`, content:`ユーザーが入力するべき内容を示すプレースホルダーテキストを指定。<br><input type='text' ***='Enter your username'>`},
{target:`<input>`, content:`ユーザーが入力するためのさまざまな種類のフィールドを作成するために使用。<br><*** type='checkbox' name='subscribe' value='1'>`},
{target:`checkbox`, content:`チェックボックスを作成するための属性。<br><*** type='***' name='subscribe' value='1'>`},
{target:`<label>`, content:`フォームコントロールに関連するテキストを表示するために使用。<br><*** for='username'>Username:</***><br><input type='text' id='username' name='username'>`},
{target:`for`, content:`関連付ける入力フィールドのIDを指定。<br><label ***='username'>Username:</label><input type='text' id='username' name='username'>`},
{target:`<video>`, content:`動画や映像を表示するための要素。<br><*** width='320' height='240' controls><source src='movie.mp4' type='video/mp4'></***>`},
{target:`autoplay`, content:`ページが読み込まれた際にビデオを自動再生。<br><video ***><source src='movie.mp4' type='video/mp4'></video>`},
{target:`muted`, content:`動画をミュートにするか指定。<br><video ***><source src='movie.mp4' type='video/mp4'></video>`},
{target:`<marquee>`, content:`テキストや画像をスクロールさせるための要素。<br><*** behavior='scroll' direction='left' loop='3' scrollamount='5'>Scrolling Text</***>`},
{target:`behavior`, content:`スクロールの振る舞いを指定します。'alternate'を指定すると、要素がスクロールしたり戻ったりを繰り返す。<br><marquee ***='alternate'>...</marquee>`},
{target:`direction`, content:`スクロールの方向を指定します。'up'を指定すると、テキストが上に向かってスクロール。<br><marquee ***='up'>...</marquee>`},
{target:`loop`, content:`スクロールのループ回数を指定。<br><marquee ***='3'>...</marquee>`},
{target:`scrollamount`, content:`1回のスクロールの速さを指定。<br><marquee ***='5'>...</marquee>`},
{target:`&emsp;`, content:`通常のスペースとは異なり、幅が広い空白が挿入。<br><p>This is***some text.</p>`},
{target:`<article>`, content:`記事やコンテンツのセクションを定義。<br><***><h2>Article Title</h2><p>Article content...</p></***>`},
{target:`<span>`, content:`インライン要素でスタイルを適用するためのコンテナ。<br><*** style='color: red;'>Red text</***>`},
{target:`<audio>`, content:`音声コンテンツを再生するための要素。<br><*** controls><source src='audio.mp3' type='audio/mp3'></***>`},
{target:`controls`, content:`ブラウザに再生コントロール（再生、一時停止、音量調整など）を表示するよう指示する属性。<br><audio ***><source src='audio.mp3' type='audio/mp3'></audio>`},
{target:`color`, content:`テキストの色を指定するCSSプロパティ。<br>***: red;`},
{target:`background-color`, content:`背景色を指定するCSSプロパティ。<br>***: red;`},
{target:`font-size`, content:`フォントのサイズを指定するCSSプロパティ。<br>***: 10px;`},
{target:`width`, content:`要素の幅を指定するCSSプロパティ。<br>***: 200px;`},
{target:`height`, content:`要素の高さを指定するCSSプロパティ。<br>***: 200px;`},
{target:`font-family`, content:`フォントの種類を指定するCSSプロパティ。<br>***: 'Gill Sans Extrabold', sans-serif;`},
{target:`border`, content:`要素の境界線（ボーダー）のスタイル、太さ、色を指定するCSSプロパティ。<br>***: solid;`},
{target:`padding`, content:`要素の内側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px;`},
{target:`margin`, content:`要素の外側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px 0;`},
{target:`display`, content:`HTML要素の表示を設定。noneは最初から無かったかのように要素を隠し、次の要素が繰り上がるCSSプロパティ。<br>***: none; ***: inline;`},
{target:`float`, content:`HTML要素を左や右に配置。また、flowから外れ、この要素が最初からなかったかのように次の要素が配置。次の要素に含まれるテキストなどインラインのコンテンツは回り込むCSSプロパティ。<br>***: right;`},
{target:`clear`, content:`HTML要素を左や右に配置。テキストの回り込みを避けたい場合に設定するCSSプロパティ。<br>***: none; ***: left;`},
{target:`position`, content:`HTML要素を、relativeはflowの場所から指定された距離だけずらす。abusoluteは指定された一番近い親要素もしくはwindowの端から指定の距離だけ離れた位置に配置。fixedはwindowに対して指定の場所に要素を固定し、スクロールしても要素は動かない。stickyのある要素はwindowの端にくるとfixedになる。Staticは要素をデフォルトのflow layoutに従わせるCSSプロパティ。<br>***: relative; ***: absolute;`},
{target:`flex-direction`, content:`レイアウトの方向のCSSプロパティ。<br>***: row; ***: row-reverse; ***: column;`},
{target:`justify-content`, content:`レイアウトの方向に沿っての配置するCSSプロパティ。<br>***: center; ***: space-between; ***: space-around; ***: space-evenly; `},
{target:`align-items`, content:`レイアウト方角に直角に配置するCSSプロパティ。center|flex=enc|space-around\space-between|stretch。<br>***: stretch; ***: center; ***: start; ***: end;`},
{target:`visibility`, content:`HTML要素の表示を設定するCSSプロパティ。hiddenは要素は見えなくなるも、flowに存在しているため、次の要素は動かない。<br>***: visible ***: hidden; ***: collapse;`},
{target:`transform`, content:`要素の変形（位置、回転、スケールなど）を指定するCSSプロパティ。<br>***: rotate(0.5turn); ***: scale(2, 0.5); ***: scale(0.5) translate(-100%, -100%);`},
{target:`src`, content:`要素のソースのCSSプロパティ。<br>***: local(font);`},
{target:`opacity`, content:`要素の透明度を取得または設定するCSSプロパティ。<br>***: 90%;<br>`},
{target:`visibility`, content:`文書のレイアウトを変更することなく要素の表示/非表示を取得または設定するCSSプロパティ。<br>***: visible;<br>***: hidden;`},
{target:`align-items`, content:`フレックスアイテムの垂直方向の配置を指定するCSSプロパティ。<br>***: center;→アイテムを垂直中央に配置`},
{target:`background-image`, content:`背景に使用する画像を指定するCSSプロパティ。<br>***: url('image.jpg');→背景に 'image.jpg' 画像を表示`},
{target:`background-size`, content:`背景画像のサイズを指定するCSSプロパティ。<br>***: cover;→背景画像を要素に合わせて表示`},
{target:`border-radius`, content:`ボーダーの角の半径を指定するCSSプロパティ。<br>***: 10px;→ボーダーの角を10pxの円で丸くする`},
{target:`border-right`, content:`ボーダーの右側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの右側を1pxの黒い実線に指定`},
{target:`border-top`, content:`ボーダーの上側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの上側を1pxの黒い実線に指定`},
{target:`bottom`, content:`要素の下端位置を指定するCSSプロパティ。<br>***: 20px;→要素の下端を20px下に配置`},
{target:`box-shadow`, content:`要素に影を付けるするCSSプロパティ。<br>***: 2px2px4px#000;→要素に2px右下に4pxの黒い影を追加`},
{target:`box-sizing`, content:`ボックスモデルのサイズ計算方法を指定するCSSプロパティ。<br>***: border-box;→ボックスモデルにボーダーとパディングを含む`},
{target:`column-gap`, content:`列と列の間隔を指定するCSSプロパティ。<br>***: 20px;→列と列の間隔を20pxに指定`},
{target:`cursor`, content:`マウスポインタの形状を指定するCSSプロパティ。<br>***: pointer;→マウスポインタをポインター形状に指定`},
{target:`flex-direction`, content:`フレックスコンテナ内のアイテムの配置方向を指定するCSSプロパティ。<br>***: column;→アイテムを縦方向に配置`},
{target:`font-family`, content:`テキストに使用するフォントを指定するCSSプロパティ。<br>***: Arial',sans-serif;→'Arial' フォントまたはサンセリフフォントを指定`},
{target:`font-size`, content:`テキストのフォントサイズを指定するCSSプロパティ。<br>***: 16px;→テキストのフォントサイズを16pxに指定`},
{target:`font-weight`, content:`テキストの太さを指定するCSSプロパティ。<br>***: bold;→テキストの太さを太字に指定`},
{target:`letter-spacing`, content:`文字間のスペースを指定するCSSプロパティ。<br>***: 2px;→文字間に2pxのスペースを設ける`},
{target:`line-height`, content:`行の高さを指定するCSSプロパティ。<br>***: 1.5;→行の高さをフォントサイズの1.5倍に指定`},
{target:`list-style`, content:`リストアイテムのマーカーのスタイルを指定するCSSプロパティ。<br>***: squareinside;→マーカーのスタイルを正方形に指定`},
{target:`margin-top`, content:`要素の上端からのマージンを指定するCSSプロパティ。<br>***: 10px;→上端から10pxのマージンを設ける`},
{target:`max-height`, content:`要素の最大の高さを指定するCSSプロパティ。<br>***: 300px;→要素の高さを最大300pxに制限`},
{target:`max-width`, content:`要素の最大の幅を指定するCSSプロパティ。<br>***: 500px;→要素の幅を最大500pxに制限`},
{target:`object-fit`, content:`画像などの置換要素の表示方法を指定するCSSプロパティ。<br>***: cover;→画像を要素に合わせて表示`},
{target:`object-fit`, content:`画像などの置換要素の表示方法を指定するCSSプロパティ。<br>***: cover;→画像を要素に合わせて表示`},
{target:`overflow`, content:`要素のオーバーフローの挙動を指定するCSSプロパティ。<br>***: hidden;→要素のオーバーフローを非表示にする`},
{target:`scale`, content:`変形（拡大縮小）のスケールを指定するCSSプロパティ。<br>***: scale(1.5);→要素を1.5倍に拡大`},
{target:`scroll-behavior`, content:`スクロールの動作を指定するCSSプロパティ。<br>***: smooth;→スクロールを滑らかにする`},
{target:`text-align`, content:`テキストの水平方向の配置を指定するCSSプロパティ。<br>***: center;→テキストを中央に配置`},
{target:`text-decoration`, content:`テキストの装飾を指定するCSSプロパティ。<br>***: underline;→テキストに下線を追加`},
{target:`text-shadow`, content:`テキストに影を指定するCSSプロパティ。<br>***: 2px2px4px#000;→テキストに2px右下に4pxの黒い影を追加`},
{target:`text-wrap`, content:`テキストの折り返し方法を指定するCSSプロパティ。<br>***: nowrap;→テキストを折り返さずに表示`},
{target:`top`, content:`要素の上端位置を指定するCSSプロパティ。<br>***: 20px;→要素の上端を20px上に配置`},
{target:`transition`, content:`変化時のアニメーション効果を指定するCSSプロパティ。<br>***: opacity0.5sease-in-out;→不透明度の変化を0.5秒かけてイージングで実行`},
{target:`width`, content:`要素の幅を指定するCSSプロパティ。<br>***: 200px;→要素の幅を200pxに指定`},
{target:`z-index`, content:`要素のスタッキングコンテキストの位置を指定するCSSプロパティ。<br>***: 3;→要素のスタッキングコンテキストの位置を3に指定`},
]
