// glossaryファイル HTML_CSS_Code
`use strict`
const glossary = [
{target:`DOTYPE宣言`, content:`使用したいHTMLのバージョンをブラウザに伝えるコード。`},
{target:`html要素`, content:`Webページのルート要素。headとbodyが入る。`},
{target:`head要素`, content:`Webページを表示するのにブラウザが必要とするデータ（metadata）が入る。`},
{target:`body要素`, content:`画面上に表示させたいすべてのデータが入る。`},
{target:`ブロック要素`, content:`画面上で要素は常に改行して始まり、使える幅いっぱいに広がる。`},
{target:`インライン要素`, content:`その中身が必要とする幅しかとらない。要素は前の要素と同じ行の中で続く。`},
{target:`空要素`, content:`それだけで1つの要素を成し、コンテンツを持たない。`},
{target:`コンテンツ`, content:`開始タグと終了タグに囲まれる中身。`},
{target:`セレクタ`, content:`スタイルを適用する対象を指定し、プロパティと値で見た目を定義。CSSではケバブケースを使用。基本的な種類としては、要素型、id、クラスなどがある。`},
{target:`要素型セレクタ`, content:`HTMLページ内のそのタイプの要素（タグ）すべてを指定。`},
{target:`idセレクタ`, content:`HTMLページ内で指定されたidをもつ要素を指定。CSSファイル側で頭に'#'をつける。`},
{target:`クラスセレクタ`, content:`HTMLページ内で指定されたクラス名を持つ全ての要素を指定。CSSファイル側で頭に'.'をつける。`},
{target:`ボックスモデル`, content:`Webページで各要素は四角い箱として表示。箱にはコンテンツ、パディング、ボーダー、マージンの4つのエリアがある。`},
{target:`CSSレイアウトモード`, content:`ボックス（HTML要素）の位置やサイズを指定。`},
{target:`CSSプロパティ`, content:`HTML文書内の要素にスタイルやレイアウトを適用するために使用。`},
{target:`コンテンツ`, content:`Webページのテキストや画像など。`},
{target:`パディング`, content:`Webページのコンテンツと箱の境界の間隔。`},
{target:`ボーダー`, content:`Webページの箱の四周の境界線。スタイル、幅、色の設定が可能。`},
{target:`マージン`, content:`Webページで要素の外側に追加される余白。この余白により、要素が周りの要素との間に一定のスペースを持つことができる。`},
{target:`Flowレイアウト`, content:`デフォルトで特に指定しない。HTMLファイルの中の順にしたがってブロック要素が上から下へ、インライン要素が右に流れる。`},
{target:`Flexboxレイアウト`, content:`効率よく要素を配置できるレイアウトモード。配置を指定したい要素を含む親要素にflexboxを使うことを設定。そのあとさまざまなプロパティを使って配置を設定。displayで設定。`},
{target:`DOM ドキュメント オブジェクト モデル`, content:`HTMLオブジェクトのツリーのこと。documentオブジェクトを介してJavaScriptでアクセスし変更を加えられる。`},
{target:`ツリー構造`, content:`HTMLドキュメントの各要素は、階層構造や親子関係、兄弟関係を持つ。`},
{target:`親要素`, content:`HTMLドキュメントの上位層の要素。`},
{target:`子要素`, content:`HTMLドキュメントの下位層の要素。`},
{target:`兄弟要素`, content:`HTMLドキュメントで同じ層にある要素。`},
{target:`ノード`, content:`ツリー構造やネットワークなどで、接続や階層構造の要素を指す。`},
{target:`documentオブジェクト`, content:`DOMツリーのルートを指す。HTMLファイル全体に相当する。`},
{target:`window`, content:`DOM文書を収めるウィンドウを表す。`},
{target:`CSS（Cascading Style Sheets）`, content:`HTML要素にどんなスタイルをつけたいかを記述する言語。DOM要素では、すべてのDOM要素のstyleプロパティの中にある。`},
{target:`CSSプロパティ`, content:`関連付けられた値によりブラウザーがどのように要素を表示するかを定義する特性。`},
{target:`イベント`, content:`ユーザーのインプットなど、ソフトウェアが認識する何らかのアクション。`},
{target:`イベントリスナー`, content:`イベントが発生したら行われる動きを記述した関数を仕組む。イベントが発生したらその関数を呼び出し、関数が実行される。addEventlistener関数。`},
{target:`イベントオブジェクト`, content:`イベントリスナーに仕込んだ関数に渡す引数。`},
{target:`&lt;!DOCTYPE&gt;`, content:`HTML文書のバージョンと型を定義。<br>&lt;*** html&gt;`},
{target:`&lt;html&gt;`, content:`HTML文書全体を囲む。<br>&lt;*** lang='ja'&gt;`},
{target:`lang`, content:`言語を指定する属性。<br>&lt;html ***='ja'&gt;`},
{target:`&lt;meta&gt;`, content:`メタデータを指定。<br>&lt;*** charset='UTF-8'&gt;`},
{target:`charset`, content:`文字エンコーディングを指定する属性。<br>&lt;meta ***='UTF-8'&gt;`},
{target:`name`, content:`メタデータやコントロールの名前を指定する属性。<br>&lt;meta ***='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'&gt;`},
{target:`content`, content:`name属性で指定されたメタタグの内容を指定する属性。<br> &lt;meta name='theme-color' ***='#000000'&gt;`},
{target:`&lt;link&gt;`, content:`外部リソースを読み込む。<br>&lt;*** rel='stylesheet' type='text/css' href='style.css'&gt;`},
{target:`rel`, content:`リンク先との関係を指定する属性。<br>&lt;link ***='stylesheet' href='styles.css'&gt;`},
{target:`&lt;a&gt;`, content:`ハイパーテキストをリンク。<br>&lt;*** href='https://example.com'&gt;Visit Example&lt;/***&gt;`},
{target:`href`, content:`ハイパーリンク先を指定する属性。<br>&lt;a ***='https://example.com'&gt;Visit Example&lt;/a&gt;`},
{target:`&lt;script&gt;`, content:`JavaScriptコードを挿入。<br>&lt;*** type='text/javascript' src='script.js'&gt;&lt;/***&gt;`},
{target:`type`, content:`リンク先やスクリプトのタイプを指定する属性。<br>&lt;script ***='text/javascript' src='script.js'&gt;&lt;/script&gt;`},
{target:`&lt;title&gt;`, content:`ページのタイトルを指定。<br>&lt;***&gt;Document&lt;/***&gt;`},
{target:`&lt;body&gt;`, content:`ページの本文を含む。<br>&lt;***&gt;...&lt;/***&gt;`},
{target:`&lt;div&gt;`, content:`ブロック要素でコンテンツをグループ化。<br>&lt;*** class='container'&gt;...&lt;/***&gt;`},
{target:`&lt;h1&gt;～&lt;h6&gt;`, content:`見出しを定義。<br>&lt;***&gt;This is a Heading&lt;/***&gt;`},
{target:`&lt;p&gt;`, content:`段落を定義。<br>&lt;***&gt;This is a paragraph.&lt;/***&gt;`},
{target:`&lt;nav&gt;`, content:`ウェブページ内でユーザーがサイトを効果的に移動し、目的の情報にアクセスするのに役立つナビゲーションコンテンツを定義。<br>&lt;***&gt;...&lt;/***&gt;`},
{target:`&lt;ul&gt;`, content:`箇条書きリストを定義。<br>&lt;***&gt;<br>&emsp;&lt;li&gt;Item 1&lt;/li&gt;<br>&emsp;&lt;li&gt;Item 2&lt;/li&gt;<br>&lt;/***&gt;`},
{target:`&lt;ol&gt;`, content:`番号付きリストを定義。<br>&lt;***&gt;<br>&emsp;&lt;li&gt;Item 1&lt;/li&gt;<br>&emsp;&lt;li&gt;Item 2&lt;/li&gt;<br>&lt;/***&gt;`},
{target:`&lt;li&gt;`, content:`リストアイテムを定義。<br>&lt;ul&gt;<br>&emsp;&lt;***&gt;Item 1&lt;/***&gt;<br>&emsp;&lt;***&gt;Item 2&lt;/***&gt;<br>&lt;/ul&gt;`},
{target:`&lt;img&gt;`, content:`画像を表示。<br>&lt;*** src='image.jpg' alt='Description'&gt;`},
{target:`&lt;button&gt;`, content:`ボタンを定義。<br>&lt;*** onclick='myFunction()'&gt;Click me&lt;/***&gt;`},
{target:`&lt;em&gt;`, content:`強調を表す斜体のテキスト。<br>&lt;***&gt;This is emphasized text.&lt;/***&gt;`},
{target:`&lt;strong&gt;`, content:`強い強調を表す太字のテキスト。<br>&lt;***&gt;This is strong emphasized text.&lt;/***&gt;`},
{target:`&lt;span&gt;`, content:`スタイルやイベントのためのインライン要素。<br>&lt;*** style='color: red;'&gt;Red text&lt;/***&gt;`},
{target:`style`, content:`要素のインラインスタイルをCSS Style Declarationオブジェクトの形で返すHTML Elementの読み取り専用プロパティ。このオブジェクトは、その要素のインラインのstyle属性で定義されている属性に値が割り当てられ、その要素のすべてのスタイルプロパティのリストが入っている。スタイル宣言は、null または空文字列を設定することでリセットできる。<br>&lt;body ***='font-weight:bold'&gt;<br>element.***.backgroundColor = 'red'`},
{target:`.cssText`, content:`CSS Style Sheetスタイルルールの実際のテキストを返すCSSRuleインターフェイスのプロパティ。JavaScriptでCSS表記のままスタイルを指定できる。<br>Element.style.*** = 'width: 300px; position: relative; top: 250px; left: 250px';`},
{target:`&lt;br&gt;`, content:`改行を挿入。<br>&lt;p&gt;First line&lt;***&gt;Second line&lt;/p&gt;`},
{target:`id`, content:`要素に一意の識別子を付与。<br>&lt;div ***='main-content'&gt;...&lt;/div&gt;`},
{target:`class`, content:`複数の要素に同じスタイルを適用するためのクラス。<br>&lt;p ***='highlight'&gt;This is highlighted text.&lt;/p&gt;`},
{target:`&lt;select&gt;`, content:`ユーザーがドロップダウンメニューから選択できるオプションのリストを表示するために使用。<br>&lt;*** name='pets' id='pet-select'&gt;<br>&emsp;&lt;option value=''&gt;--Please choose an option--&lt;/option&gt;<br>&emsp;&lt;option value='dog'&gt;Dog&lt;/option&gt;<br>&emsp;&lt;option value='cat'&gt;Cat&lt;/option&gt;<br>&emsp;&lt;option value='hamster'&gt;Hamster&lt;/option&gt;<br>&lt;/***&gt;`},
{target:`name`, content:`要素の名前を指定。<br>&lt;select ***='fruits'&gt;...&lt;/select&gt;`},
{target:`&lt;option&gt;`, content:`ドロップダウンリストの選択肢を定義。<br>&lt;*** value='pig'&gt;Pig&lt;/option&gt;`},
{target:`value`, content:`この選択肢が選択された場合に送信される値を指定。<br>&lt;option ***='horse'&gt;Horse&lt;/option&gt;`},
{target:`&lt;input&gt;`, content:`ユーザーが入力するためのさまざまな種類のフィールドを作成するために使用。<br>&lt;*** type='checkbox' name='subscribe' value='1'&gt;`},
{target:`checkbox`, content:`チェックボックスを作成するための属性。<br>&lt;input type='***' name='subscribe' value='1'&gt;`},
{target:`placeholder`, content:`ユーザーが入力するべき内容を示すプレースホルダーテキストを指定。<br>&lt;input type='text' ***='Enter your username'&gt;`},
{target:`&lt;label&gt;`, content:`フォームコントロールに関連するテキストを表示するために使用。<br>&lt;*** for='username'&gt;Username:&lt;/***&gt;<br>&lt;input type='text' id='username' name='username'&gt;`},
{target:`for`, content:`関連付ける入力フィールドのIDを指定。<br>&lt;label ***='username'&gt;Username:&lt;/label&gt;<br>&lt;input type='text' id='username' name='username'&gt;`},
{target:`&lt;video&gt;`, content:`動画や映像を表示するための要素。<br>&lt;*** width='320' height='240' controls&gt;<br>&emsp;&lt;source src='movie.mp4' type='video/mp4'&gt;<br>&lt;/***&gt;`},
{target:`autoplay`, content:`ページが読み込まれた際にビデオを自動再生。<br>&lt;video ***&gt;<br>&emsp;&lt;source src='movie.mp4' type='video/mp4'&gt;<br>&lt;/video&gt;`},
{target:`muted`, content:`動画をミュートにするか指定。<br>&lt;video ***&gt;<br>&emsp;&lt;source src='movie.mp4' type='video/mp4'&gt;<br>&lt;/video&gt;`},
{target:`&lt;marquee&gt;`, content:`テキストや画像をスクロールさせるための要素。<br>&lt;*** behavior='scroll' direction='left' loop='3' scrollamount='5'&gt;Scrolling Text&lt;/***&gt;`},
{target:`behavior`, content:`スクロールの振る舞いを指定します。'alternate'を指定すると、要素がスクロールしたり戻ったりを繰り返す。<br>&lt;marquee ***='alternate'&gt;...&lt;/marquee&gt;`},
{target:`direction`, content:`スクロールの方向を指定します。'up'を指定すると、テキストが上に向かってスクロール。<br>&lt;marquee ***='up'&gt;...&lt;/marquee&gt;`},
{target:`loop`, content:`スクロールのループ回数を指定。<br>&lt;marquee ***='3'&gt;...&lt;/marquee&gt;`},
{target:`scrollamount`, content:`1回のスクロールの速さを指定。<br>&lt;marquee ***='5'&gt;...&lt;/marquee&gt;`},
{target:`& nbsp;`, content:`半角スペースを挿入（使用時スペース除く）。<br>&lt;p&gt;This is***some text.&lt;/p&gt;`},
{target:`& ensp;`, content:`通常のスペースとは異なり、幅が広いスペースを挿入（使用時スペース除く）。<br>&lt;p&gt;This is***some text.&lt;/p&gt;`},
{target:`& emsp;`, content:`通常のスペースとは異なり、半角2倍のスペースを挿入（使用時スペース除く）。<br>&lt;p&gt;This is***some text.&lt;/p&gt;`},
{target:`& nbsp;`, content:`ノーブレークスペース（前後で自動改行しないスペース）(使用時スペース除く)。<br>&lt;p&gt;This is***some text.&lt;/p&gt;`},
{target:`& lt;`, content:`小なり記号（<, 使用時スペース除く）。`},
{target:`& gt;`, content:`大なり記号（>, 使用時スペース除く）。`},
{target:`& copy;`, content:`コピーライト記号（@, 使用時スペース除く）。`},
{target:`& quot;`, content:`ダブルクオート（使用時スペース除く）。`},
{target:`&lt;article&gt;`, content:`記事やコンテンツのセクションを定義。<br>&lt;***&gt;<br>&emsp;&lt;h2&gt;Article Title&lt;/h2&gt;<br>&emsp;&lt;p&gt;Article content...&lt;/p&gt;<br>&lt;/***&gt;`},
{target:`&lt;span&gt;`, content:`インライン要素でスタイルを適用するためのコンテナ。<br>&lt;*** style='color: red;'&gt;Red text&lt;/***&gt;`},
{target:`&lt;audio&gt;`, content:`音声コンテンツを再生するための要素。<br>&lt;*** controls&gt;<br>&emsp;&lt;source src='audio.mp3' type='audio/mp3'&gt;<br>&lt;/***&gt;`},
{target:`controls`, content:`ブラウザに再生コントロール（再生、一時停止、音量調整など）を表示するよう指示する属性。<br>&lt;audio ***&gt;<br>&emsp;&lt;source src='audio.mp3' type='audio/mp3'&gt;<br>&lt;/audio&gt;`},
{target:`&lt;hr&gt;`, content:`水平の罫線。<br>&lt;***&gt;`},
{target:`&lt;pre&gt;`, content:`整形済みテキスト (preformatted text) を表します。この要素内のテキストは一般的に、ファイル内でのレイアウトをそのまま反映して等幅フォントで表示する。<br>&lt;***&gt;...&lt;/***&gt;`},
{target:`&lt;time&gt;`, content:`特定の時の区間を表します。datetime 属性を使用して、機械可読な形式の日付を記述することができ、検索エンジンの結果を改善したりリマインダーなどの独自機能に使用できる。<br>&lt;*** datetime='2022-01-04'&gt;...&lt;/time&gt;`},
{target:`color`, content:`テキストの色を指定するCSSプロパティ。<br>***: red;`},
{target:`background-color`, content:`背景色を指定するCSSプロパティ。<br>***: red;`},
{target:`font-size`, content:`フォントのサイズを指定するCSSプロパティ。<br>***: 10px;`},
{target:`width`, content:`要素の幅を指定するCSSプロパティ。<br>***: 200px;`},
{target:`auto`, content:`自動サイズ調整のCSS値。<br>width: ***;`},
{target:`fit-content`, content:`利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えるCSS値。<br>width: ***;`},
{target:`calc`, content:`CSS のプロパティ値を指定する際に計算を行うことができるCSS関数。<br>width: ***(50% - 10px);`},
{target:`height`, content:`要素の高さを指定するCSSプロパティ。<br>***: 200px;`},
{target:`font-family`, content:`フォントの種類を指定するCSSプロパティ。<br>***: 'Gill Sans Extrabold', sans-serif;`},
{target:`border`, content:`要素の境界線（ボーダー）のスタイル、太さ、色を指定するCSSプロパティ。<br>***: solid;`},
{target:`padding`, content:`要素の内側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px;`},
{target:`margin`, content:`要素の外側の余白を指定するCSSプロパティ。<br>***: 10px 50px 20px 0;`},
{target:`display`, content:`HTML要素の表示を設定。noneは最初から無かったかのように要素を隠し、次の要素が繰り上がるCSSプロパティ。<br>***: none;&emsp;***: inline;`},
{target:`flex`, content:`要素は、ブロック要素のように動作しつつ、そのコンテンツをフレックスボックスモデルに従ってレイアウトするCSS値。<br>display: ***;`},
{target:`inline`, content:`要素は、ブロック要素のように動作しつつ、そのコンテンツをフレックスボックスモデルに従ってレイアウトするCSS値。<br>display: ***;`},
{target:`inline-block`, content:`ブロック要素ボックスを生成しますが、周囲のコンテンツに対しては単一のインラインボックスであるかのように流れるようになるCSS値。<br>display: ***;`},
{target:`inline-flex`, content:`インライン要素のようにふるまいつつ、その内容物をフレックスボックスモデルに従ってレイアウトするCSS値。<br>display: ***;`},
{target:`none`, content:`表示を無くし、レイアウトに影響を与えなくなるCSS値。<br>display: ***;`},
{target:`float`, content:`HTML要素を左や右に配置。また、flowから外れ、この要素が最初からなかったかのように次の要素が配置。次の要素に含まれるテキストなどインラインのコンテンツは回り込むCSSプロパティ。<br>***: right;`},
{target:`clear`, content:`HTML要素を左や右に配置。テキストの回り込みを避けたい場合に設定するCSSプロパティ。<br>***: none;&emsp;***: left;`},
{target:`position`, content:`HTML要素を、relativeはflowの場所から指定された距離だけずらす。abusoluteは指定された一番近い親要素もしくはwindowの端から指定の距離だけ離れた位置に配置。fixedはwindowに対して指定の場所に要素を固定し、スクロールしても要素は動かない。stickyのある要素はwindowの端にくるとfixedになる。Staticは要素をデフォルトのflow layoutに従わせるCSSプロパティ。<br>***: relative;&emsp;***: absolute;`},
{target:`absolute`, content:`絶対位置指定。要素は文書の通常のフローから除外され、ページレイアウト内にこの要素のための空間が作成されないCSS値。<br>position: ***;`},
{target:`fixed`, content:`固定位置指定。要素は文書の通常のフローから除外され、ページレイアウト内に要素のための空間が作成されないCSS値。<br>position: ***;`},
{target:`relative`, content:`相対位置指定。要素は文書の通常のフローに従って配置され、 top, right, bottom, left の値に基づいて自分自身からの相対オフセットで配置するCSS値。<br>position: ***;`},
{target:`sticky`, content:`固定位置指定（親基準）。要素は文書の通常のフローに従って配置され、直近のスクロールする祖先および包含ブロック（直近のブロックレベル祖先、表関連要素を含む）に対して top, right, bottom, left の値に基づいて相対配置するCSS値。<br>position: ***;`},
{target:`flex-direction`, content:`レイアウトの方向のCSSプロパティ。<br>***: row;&emsp;***: row-reverse;&emsp;***: column;`},
{target:`row`, content:`フレックスレイアウトを行のテキストの方向に配置するCSS値。<br>flex-direction: ***;`},
{target:`column`, content:`フレックスレイアウトを積み重なるように配置するCSS値。<br>flex-direction: ***;`},
{target:`justify-content`, content:`レイアウトの方向に沿っての配置するCSSプロパティ。<br>***: center;&emsp;space-between;&emsp;space-around;&emsp;space-evenly; `},
{target:`space-around`, content:`各アイテムを均等に配置し各アイテムの両側に半分の大きさの間隔を置くCSS値。<br>justify-content: ***;`},
{target:`space-evenly`, content:`各アイテムを均等に配置し各アイテムの周りに同じ大きさの間隔を置くCSS値。<br>justify-content: ***;`},
{target:`align-items`, content:`レイアウト方角に直角に配置するCSSプロパティ。center|flex=enc|space-around\space-between|stretch。<br>***: stretch;&emsp;***: center;&emsp;***: start;&emsp;***: end;`},
{target:`visibility`, content:`HTML要素の表示を設定するCSSプロパティ。hiddenは要素は見えなくなるも、flowに存在しているため、次の要素は動かない。<br>***: visible;&emsp;***: hidden;&emsp;***: collapse;`},
{target:`visible`, content:`要素のボックスが可視になるCSS値。<br>visibility: ***;`},
{target:`hidden`, content:`要素のボックスは不可視になります (描画されない) が、レイアウトには通常通り影響するCSS値。<br>visibility: ***;`},
{target:`transform`, content:`要素の変形（位置、回転、スケールなど）を指定するCSSプロパティ。<br>***: rotate(0.5turn);&emsp;***: scale(2, 0.5);&emsp;***: scale(0.5) translate(-100%, -100%);`},
{target:`rotate`, content:`要素の回転指定のCSS値。<br>transform: ***(45deg);`},
{target:`translate`, content:`要素の位置を移動するCSS値。<br>transform: ***(10px, 20px);`},
{target:`translateX`, content:`X軸方向の位置移動するCSS値。<br>transform: ***(10px);`},
{target:`translateY`, content:`Y軸方向の位置移動するCSS値。<br>transform: ***(20px);`},
{target:`src`, content:`要素のソースのCSSプロパティ。<br>***: local(font);`},
{target:`opacity`, content:`要素の透明度を取得または設定するCSSプロパティ。<br>***: 90%;<br>`},
{target:`align-items`, content:`フレックスアイテムの垂直方向の配置を指定するCSSプロパティ。<br>***: center;→アイテムを垂直中央に配置`},
{target:`background-image`, content:`背景に使用する画像を指定するCSSプロパティ。<br>***: url('image.jpg');→背景に 'image.jpg' 画像を表示`},
{target:`background-size`, content:`背景画像のサイズを指定するCSSプロパティ。<br>***: cover;→背景画像を要素に合わせて表示`},
{target:`cover`, content:`画像をコンテナーいっぱいにできるだけ大きく拡大縮小し、必要に応じて画像を引き伸ばす。画像の比率が要素と異なる場合は、何もない空間が残らないように、上下または左右が切り取られるCSS値。<br>background-size: ***;`},
{target:`border-radius`, content:`ボーダーの角の半径を指定するCSSプロパティ。<br>***: 10px;→ボーダーの角を10pxの円で丸くする`},
{target:`border-right`, content:`ボーダーの右側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの右側を1pxの黒い実線に指定`},
{target:`border-top`, content:`ボーダーの上側を指定するCSSプロパティ。<br>***: 1pxsolid#000;→ボーダーの上側を1pxの黒い実線に指定`},
{target:`bottom`, content:`要素の下端位置を指定するCSSプロパティ。<br>***: 20px;→要素の下端を20px下に配置`},
{target:`box-shadow`, content:`要素に影を付けるするCSSプロパティ。<br>***: 2px2px4px#000;→要素に2px右下に4pxの黒い影を追加`},
{target:`box-sizing`, content:`ボックスモデルのサイズ計算方法を指定するCSSプロパティ。<br>***: border-box;→ボックスモデルにボーダーとパディングを含む`},
{target:`column-gap`, content:`列と列の間隔を指定するCSSプロパティ。<br>***: 20px;→列と列の間隔を20pxに指定`},
{target:`cursor`, content:`マウスポインタの形状を指定するCSSプロパティ。<br>***: pointer;→マウスポインタをポインター形状に指定`},
{target:`pointer`, content:`マウスカーソル指定。ユーザーが（マウスなどの）ポインティングデバイスを持っているか、もしそうならば、主要なポインティングデバイスにどれだけの正確性があるかを調べるCSSメディア特性。<br>cursor: ***;`},
{target:`flex-direction`, content:`フレックスコンテナ内のアイテムの配置方向を指定するCSSプロパティ。<br>***: column;→アイテムを縦方向に配置`},
{target:`font-family`, content:`テキストに使用するフォントを指定するCSSプロパティ。<br>***: Arial',sans-serif;→'Arial' フォントまたはサンセリフフォントを指定`},
{target:`font-size`, content:`テキストのフォントサイズを指定するCSSプロパティ。<br>***: 16px;→テキストのフォントサイズを16pxに指定`},
{target:`large`, content:`大きいサイズ指定するCSS値。<br>font-size: ***;`},
{target:`font-weight`, content:`テキストの太さを指定するCSSプロパティ。<br>***: bold;→テキストの太さを太字に指定`},
{target:`bold`, content:`太字指定のCSS値。<br>font-weight: ***;`},
{target:`lighter`, content:`要素のフォントウェイトを軽くするCSS値。<br>font-weight: ***;`},
{target:`normal`, content:`標準のCSS値。<br>font-weight: ***;`},
{target:`letter-spacing`, content:`文字間のスペースを指定するCSSプロパティ。<br>***: 2px;→文字間に2pxのスペースを設ける`},
{target:`line-height`, content:`行の高さを指定するCSSプロパティ。<br>***: 1.5;→行の高さをフォントサイズの1.5倍に指定`},
{target:`list-style`, content:`リストアイテムのマーカーのスタイルを指定するCSSプロパティ。<br>***: squareinside;→マーカーのスタイルを正方形に指定`},
{target:`margin-top`, content:`要素の上端からのマージンを指定するCSSプロパティ。<br>***: 10px;→上端から10pxのマージンを設ける`},
{target:`max-height`, content:`要素の最大の高さを指定するCSSプロパティ。<br>***: 300px;→要素の高さを最大300pxに制限`},
{target:`max-width`, content:`要素の最大の幅を指定するCSSプロパティ。<br>***: 500px;→要素の幅を最大500pxに制限`},
{target:`object-fit`, content:`画像などの置換要素の表示方法を指定するCSSプロパティ。<br>***: cover;→画像を要素に合わせて表示`},
{target:`overflow`, content:`要素のオーバーフローの挙動を指定するCSSプロパティ。<br>***: hidden;→要素のオーバーフローを非表示にする`},
{target:`scale`, content:`変形（拡大縮小）のスケールを指定するCSSプロパティ。<br>***: scale(1.5);→要素を1.5倍に拡大`},
{target:`scroll-behavior`, content:`スクロールの動作を指定するCSSプロパティ。<br>***: smooth;→スクロールを滑らかにする`},
{target:`text-align`, content:`テキストの水平方向の配置を指定するCSSプロパティ。<br>***: center;→テキストを中央に配置`},
{target:`center`, content:`中央揃えのCSS値。<br>text-align: ***;`},
{target:`left`, content:`左揃えのCSS値。<br>text-align: ***;`},
{target:`right`, content:`右揃えのCSS値。<br>text-align: ***;`},
{target:`text-decoration`, content:`テキストの装飾を指定するCSSプロパティ。<br>***: underline;→テキストに下線を追加`},
{target:`text-shadow`, content:`テキストに影を指定するCSSプロパティ。<br>***: 2px 2px #000;→テキストに2px右下に2pxの黒い影を追加`},
{target:`text-wrap`, content:`テキストの折り返し方法を指定するCSSプロパティ。<br>***: nowrap;→テキストを折り返さずに表示`},
{target:`top`, content:`要素の上端位置を指定するCSSプロパティ。<br>***: 20px;→要素の上端を20px上に配置`},
{target:`transition`, content:`変化時のアニメーション効果を指定するCSSプロパティ。<br>***: opacity 0.5s ease-in-out;→不透明度の変化を0.5秒かけてイージングで実行`},
{target:`transition-duration`, content:`トランジションによるアニメーションが完了するまでの所要時間を秒数またはミリ秒数で指定するCSSプロパティ。既定値の0sはアニメーションを実行しないことを意味する。<br>***: 10s, 30s, 230ms;`},
{target:`transition-property`, content:`トランジション効果を適用する CSSプロパティを指定するCSSプロパティ。<br>***: all;<br>***: margin-right, color;`},
{target:`z-index`, content:`要素のスタッキングコンテキストの位置を指定するCSSプロパティ。<br>***: 3;→要素のスタッキングコンテキストの位置を3に指定`},
{target:`background`, content:`色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定するCSSプロパティ。<br>***: #000;`},
{target:`linear-gradient`, content:`二つ以上の色の連続的な直線に沿った変化から構成される画像を生成するCSS関数。<br>background: ***(#FFD700, #FF4500);`},
{target:`url`, content:`リンク先URL指定するCSS関数。<br>background: ***('image.jpg');`},
{target:`transparent`, content:`透明色のCSS値。<br>background-color: ***;`},
{target:`border-bottom`, content:`要素の下側の境界のプロパティをすべて設定するCSSプロパティ。<br>***: dashed red;`},
{target:`border-color`, content:`要素の境界の色を設定するCSSプロパティ。<br>***: #000;`},
{target:`border-style`, content:`要素の境界線の 4 辺すべての線のスタイルを設定するCSSプロパティ。<br>***: dotted;`},
{target:`solid`, content:`実線指定するCSS値。<br>border-style: ***;`},
{target:`border-box`, content:`境界およびパディングを、要素に指定した width および height の中で取るようブラウザーに指示するCSS値。<br>box-sizing: ***;`},
{target:`#ccc`, content:`灰色 (#CCCCCC)のCSS値。<br>color: ***;`},
{target:`#FFF`, content:`白色 (#FFFFFF)のCSS値。<br>color: ***;`},
{target:`black`, content:`黒色 (#000000)のCSS値。<br>color: ***;`},
{target:`lightgray`, content:`明るい灰色 (#D3D3D3)のCSS値。<br>color: ***;`},
{target:`orange`, content:`オレンジ (#FFA500)のCSS値。<br>color: ***;`},
{target:`red`, content:`赤色 (#FF0000)のCSS値。<br>color: ***;`},
{target:`rgb`, content:`RGB色指定のCSS値。<br>color: ***(255, 0, 0);`},
{target:`skyblue`, content:`スカイブルー (#87CEEB)のCSS値。<br>color: ***;`},
{target:`white`, content:`白色 (#FFFFFF)のCSS値。<br>color: ***;`},
{target:`whitesmoke`, content:`ホワイトスモーク (#F5F5F5)のCSS値。<br>color: ***;`},
{target:`yellow`, content:`黄色 (#FFFF00)のCSS値。<br>color: ***;`},
{target:`yellowgreen`, content:`イエローグリーン (#9ACD32)のCSS値。<br>color: ***;`},
{target:`grid-column`, content:`グリッド列の中におけるグリッドアイテムの寸法と位置を指定し、線、区間、なし (自動) をグリッド配置に適用することで、グリッド領域の行の先頭と末尾の端を指定するCSSプロパティ。<br>***: 1 / 3;`},
{target:`contain`, content:`ある要素とその内容が、できる限り多く、文書ツリーの他の部分から独立していることを示す。これによってブラウザーがレイアウト、スタイル、描画、寸法、およびその組み合わせの再計算を、ページ全体ではなく DOM の限られた領域に対して行うことで、性能上の明らかな利点をもたらす。このプロパティはページ上にそれぞれ独立したたくさんのウィジェットがあるときに有益であり、ウィジェットの内部を、ウィジェットの囲みボックスの外側の副作用から守るために使用することができるCSSプロパティ。<br>***: paint;`},
{target:`pointer-events`, content:`特定のグラフィック要素がポインターイベントの対象になる可能性のある環境 (存在する場合) を設定するCSSプロパティ。<br>***: auto;`},
{target:`margin-block`, content:`論理的なブロックの先頭と末尾のマージンを設定するCSSプロパティ。<br>***: 10px 20px;`},
{target:`flex-basis`, content:`フレックスアイテムの主要部分の初期の寸法を設定。 box-sizing で設定していない限り、このプロパティはコンテンツボックスの寸法を定義するCSSプロパティ。<br>***: 50%;`},
{target:`font`, content:`フォント指定CSSプロパティ。<br>***: 16px/1.5 'Arial', sans-serif;`},
{target:`font-display`, content:`フォントの表示方法指定CSS記述子。<br>***: swap;`},
{target:`swap`, content:`フォントに対して非常に短いブロック時間の後、永続的にスワップ時間を置くCSS値。<br>font-display: ***;`},
{target:`font-family`, content:`選択した要素に対して、フォントファミリー名や総称ファミリー名の優先順位リストを指定することができるCSSプロパティ。<br>***: 'Arial', 'Helvetica', sans-serif;`},
{target:`sans-serif`, content:`サンセリフフォント指定のCSS値。<br>font-family: 'Helvetica', ***;`},
{target:`latin-ext`, content:`拡張ラテン文字指定のCSS値。<br>font-family: ***;`},
{target:`latin`, content:`ラテン文字指定のCSS値。<br>font-family: ***;`},
{target:`serif`, content:`セリフフォント指定のCSS値。<br>font-family: 'Times New Roman', ***;`},
{target:`Times`, content:`Times New Roman フォントのCSS値。<br>font-family: '***', serif;`},
{target:`font-style`, content:`フォントスタイル指定するCSSプロパティ。<br>***: italic;`},
{target:`font-weight`, content:`フォントの太さ (あるいは重み) を指定するCSSプロパティ。<br>***: 700;`},
{target:`vh`, content:`ビューポートの高さの割合指定するCSS値。<br>height: 50***;`},
{target:`margin-bottom`, content:`要素の下側のマージン領域を設定するCSSプロパティ。<br>***: 10px;`},
{target:`margin-left`, content:`要素の左側のマージン領域を設定するCSSプロパティ。<br>***: 2em;`},
{target:`margin-right`, content:`要素の右側のマージン領域を設定するCSSプロパティ。<br>***: 30px;`},
{target:`min-width`, content:`要素の最小幅を設定するCSSプロパティ。<br>***: 200px;`},
{target:`mix-blend-mode`, content:`要素の内容物と親要素の内容物や要素の背景をどのように混合するかを設定するCSSプロパティ。<br>***: overlay;`},
{target:`outline`, content:`輪郭線 (outline) に関する様々なプロパティを単一の宣言で設定するCSSプロパティ。<br>***: 2px solid #000;`},
{target:`overflow-wrap`, content:`インライン要素に対して、テキストが行ボックスをあふれないように、ブラウザーが分割できない文字列の途中で改行を入れるかどうかの設定するCSSプロパティ。<br>***: break-word;`},
{target:`word-break`, content:`改行しなければテキストがコンテンツボックスからあふれる場合に、ブラウザーが改行を挿入するかどうかを指定するCSSプロパティ。<br>***: break-word;`},
{target:`break-word`, content:`行内にその他の分割可能な位置がない場合、通常は分割可能でない単語が任意の場所で分割されるCSS値。<br>word-break: ***;`},
{target:`first-of-type`, content:`兄弟要素のグループの中でその種類の最初の要素を表すCSS疑似クラス。<br>p:*** { color: red; }`},
{target:`nth-of-type`, content:`兄弟要素のグループの中で指定された型 (タグ名) の要素を、位置に基づいて選択するCSS疑似クラス。<br>p:***(2) { color: blue; }`},
{target:`padding-bottom`, content:`要素のパディング領域における下側の高さを設定するCSSプロパティ。<br>***: 15px;`},
{target:`text-decoration`, content:`テキストの装飾的な線の表示を設定するCSSプロパティ。<br>***: underline;`},
{target:`ease-in-out`, content:`アニメーションのタイミング関数のCSS値。<br>transition: all 0.3s ***;`},
{target:`smooth`, content:`アニメーションのスムーズ指定のCSS値。<br>transition: all 0.3s ***;`},
{target:`-webkit-text-stroke`, content:`テキスト文字の輪郭線の幅と色を指定するCSSプロパティ。<br>***: 2px black;`},
{target:`white-space`, content:`要素内のホワイトスペースをどのように扱うかを設定するCSSプロパティ。<br>***: nowrap;`},
{target:`nowrap`, content:`改行禁止するCSS値。<br>white-space: ***;`},
{target:`all`, content:`すべてのプロパティをリセットするCSSプロパティ。<br>***: initial;`},
{target:`font-face`, content:`カスタムフォントの指定するCSSアットルール。<br>@*** { ... }`},
{target:`unicode-range`, content:`@font-faceで定義されたフォントから使用される特定の文字範囲を設定し、現在のページで使用できるようにするCSS記述子。<br>***: U+26;<br>@font-face { ***: U+0025-00FF; }`},
{target:`keyframes`, content:`アニメーションの流れに沿ったキーフレーム（または中間地点）のスタイルを定義することによって、一連の CSS アニメーションの中間ステップを制御します。これにより、アニメーションの中間ステップをトランジションよりも詳細に制御するCSSアットルール。<br>@*** fadeIn { ... }`},
{target:`hover`, content:`ユーザーがカーソル（マウスポインター）を要素の上にかざしたときのスタイル指定するCSS疑似クラス。<br>.joinBtn:*** {background-color: bisque;}`},
{target:`animation`, content:`アニメーションを指定するCSSプロパティ。<br>***: 3s linear 1s infinite alternate slidein;`},
{target:`infinite`, content:`無限ループアニメーションするCSS値。<br>animation: spin 2s ***;`},
{target:`&lt;fieldset&gt;`, content:`フォーム内の関連要素のグルーピングする。<br>&lt;***&gt;<br>&emsp;&lt;legend&gt;Group&lt;/legend&gt;<br>&emsp;…<br>&lt;/***&gt;`},
{target:`&lt;legend&gt;`, content:`親要素である&lt;fieldset&gt;の内容のキャプションを表す要素。<br>&lt;fieldset&gt;<br>&emsp;&lt;***&gt;Group&lt;/***&gt;<br>&emsp;…<br>&lt;/fieldset&gt;`},
{target:`&lt;footer&gt;`, content:`フッター要素。直近の区分コンテンツまたは区分化ルート要素のフッターを表します。フッターには通常、そのセクションの著者に関する情報、関連文書へのリンク、著作権情報等を含む。<br>&lt;***&gt;Copyright © 2023 abc def. All Rights Reserved.&lt;/***&gt;`},
{target:`&lt;section&gt;`, content:`文書の自立した一般的なセクション（区間）を表す。そのセクションを表現するより意味的に具体的な要素がない場合に使用。少数の例外を除いて、セクションには見出しを置く。<br>&lt;***&gt;...&lt;/***&gt;`},
{target:`&lt;textarea&gt;`, content:`複数行のプレーンテキスト編集コントロールを表し、レビューのコメントやお問い合わせフォーム等のように、ユーザーが大量の自由記述テキストを入力できる。<br>&lt;*** rows='4' cols='50'&gt;&lt;/***&gt;`},
{target:`alt`, content:`&lt;img&gt; 要素で指定された画像が読み込まれない場合に表示する予備（代替）テキストを指定。<br>&lt;img src='image.jpg' ***='Description'&gt;`},
{target:`autocomplete`, content:`入力欄にどの種類の情報が期待されているかをブラウザーに示唆することができるのに加え、ユーザーエージェントがフォーム入力欄の値を埋めるための自動支援を提供する。<br>&lt;input type='text' ***='off'&gt;`},
{target:`autofocus`, content:`ページ読み込み時に要素にフォーカスする。<br>&lt;input type='text' ***&gt;`},
{target:`onclick`, content:`要素がクリックされたときに実行するスクリプトを指定。<br>&lt;button ***='myFunction()'&gt;Click me&lt;/button&gt;`},
{target:`spellcheck`, content:`スペルチェックの有効・無効。<br>&lt;textarea ***='false'&gt;&lt;/textarea&gt;`},
{target:`theme-color`, content:`ページやその周辺のユーザーインターフェイスの表示をカスタマイズするために使用すべき推奨色を示す。<br>&lt;meta name='***' content='#4285f4'&gt;`},
{target:`images`, content:`現在の HTML 文書の Image (en-US) のコレクションを返す。<br>var htmlCollection = document.***`},
]
