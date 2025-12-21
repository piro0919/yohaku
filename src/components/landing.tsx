import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shippori_Mincho,
  EB_Garamond,
  Zen_Maru_Gothic,
} from "next/font/google";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function Landing(): React.JSX.Element {
  return (
    <div
      className={`min-h-screen bg-linear-to-b from-stone-50 to-amber-50/30 text-stone-800 ${zenMaruGothic.className}`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className={`text-2xl font-medium tracking-wide text-stone-800 ${ebGaramond.className}`}
          >
            Yohaku
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-stone-600 transition hover:text-stone-800"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-amber-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-amber-500"
            >
              無料ではじめる
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-100/50 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-80 w-80 rounded-full bg-rose-100/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Left: Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl shadow-stone-300/50">
              <Image
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80"
                alt="日記を書いている手元"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/20 to-transparent" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 space-y-8 text-center lg:order-2 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/60 px-4 py-2 text-sm text-stone-600 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
              日記 × 性格診断
            </div>

            <h1
              className={`text-3xl font-medium tracking-tight text-stone-800 sm:text-5xl lg:text-6xl ${shipporiMincho.className}`}
            >
              日記を書くと、
              <br />
              <span className="text-amber-700">自分が見えてくる。</span>
            </h1>

            <p className="text-lg leading-relaxed text-stone-600">
              毎日の日記から、あなたの性格や心の傾向をやさしく可視化します。
              書き続けるほど、「自分ってこういう人なんだな」が少しずつ見えてきます。
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              考えすぎてしまう人、もっと自分を理解したい人のための、静かな日記アプリです。
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
              <button
                type="button"
                className="rounded-full bg-amber-600 px-8 py-4 text-lg font-medium text-white shadow-sm transition hover:bg-amber-500"
              >
                自分を知る日記をはじめる
              </button>
              <span className="text-sm text-stone-500">無料ではじめる</span>
            </div>
          </div>
        </div>

        {/* Sample Card Preview */}
        <div className="relative z-10 mx-auto mt-20 max-w-sm lg:hidden">
          <div className="mx-auto w-72 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-xl shadow-stone-200/50 backdrop-blur">
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-400">14日目 - 12月22日</p>
                <p className="mt-2 text-3xl font-medium text-stone-800">ENFP</p>
                <p className="text-sm text-amber-600">広報運動家タイプ</p>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs text-stone-500">
                    <span>外向性</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-stone-100">
                    <div className="h-full w-[78%] rounded-full bg-linear-to-r from-amber-400 to-rose-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-stone-500">
                    <span>直感型</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-stone-100">
                    <div className="h-full w-[85%] rounded-full bg-linear-to-r from-amber-400 to-rose-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-stone-500">
                    <span>感情型</span>
                    <span>62%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-stone-100">
                    <div className="h-full w-[62%] rounded-full bg-linear-to-r from-amber-400 to-rose-400" />
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-stone-400">yohaku.app</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2
            className={`mb-16 text-center text-2xl font-medium text-stone-800 sm:text-3xl ${shipporiMincho.className}`}
          >
            日記を書くと、自分がわかってくる。
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-medium text-amber-700">
                1
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">
                今日の日記を書く
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                今日あったこと、感じたこと。いつもの日記を書くだけ。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-lg font-medium text-rose-700">
                2
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">
                性格が見えてくる
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                あなたの言葉から、MBTIや心の傾向をやさしく読み取ります。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-lg font-medium text-stone-700">
                3
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">
                変化に気づく
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                書き続けると、自分の心の動きやパターンが見えてきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-stone-200 px-4 py-16">
        <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
          <span>🇹🇭 タイ</span>
          <span>🇻🇳 ベトナム</span>
          <span>🇵🇭 フィリピン</span>
          <span>🇯🇵 日本</span>
          <span>で静かに広がっています</span>
        </div>
      </section>

      {/* Why Diary */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <h2
            className={`mb-4 text-center text-2xl font-medium text-stone-800 sm:text-3xl ${shipporiMincho.className}`}
          >
            なぜ、日記で自分がわかるのか
          </h2>
          <p className="mb-12 text-center leading-relaxed text-stone-600">
            一度きりの診断より、毎日の言葉の積み重ねのほうが、本当の自分に近づけると考えています。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-3 font-medium text-stone-800">
                日記には、素の自分が出る
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                診断テストと違って、日記には飾らない本音が出ます。だからこそ、本当のあなたが見えてくるのです。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-3 font-medium text-stone-800">
                心は変わる。それが見える
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                人の心は固定ではありません。日記を続けることで、あなたの心の変化やパターンが少しずつ見えてきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2
            className={`mb-4 text-center text-2xl font-medium text-stone-800 sm:text-3xl ${shipporiMincho.className}`}
          >
            日記を書くだけで、これだけわかる
          </h2>
          <p className="mb-16 text-center text-stone-600">
            難しい操作は不要です。ふだんの日記を書くだけで、少しずつ輪郭がはっきりしていきます。
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-2 font-medium text-stone-800">MBTIタイプ</h3>
              <p className="text-sm leading-relaxed text-stone-600">
                日記の文章から、16タイプのどれに近いかを分析。日によって変わる揺らぎも、そっと教えてくれます。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-2 font-medium text-stone-800">
                心のトラッキング
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                外向性・内向性、思考・感情など、心の傾向をやさしくグラフで可視化。自分の波が見えてきます。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-2 font-medium text-stone-800">
                パーソナリティカード
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                毎日の分析結果が 1 日 1
                枚のカードとして残ります。あとから眺めたり、印象的な日だけピン留めしておくこともできます。
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-2 font-medium text-stone-800">変化の記録</h3>
              <p className="text-sm leading-relaxed text-stone-600">
                過去の日記から、あなたの心がどう変化してきたかを振り返ることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / not fit */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2
            className={`mb-4 text-center text-2xl font-medium text-stone-800 sm:text-3xl ${shipporiMincho.className}`}
          >
            Yohaku が合う人・合わないかもしれない人
          </h2>
          <p className="mb-12 text-center text-sm text-stone-600">
            なんとなくイメージを持ってもらうために、目安を書いておきます。
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-3 text-sm font-medium text-stone-800">
                こんな人には、たぶん合います
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>・日記やメモを書くのがわりと好き</li>
                <li>・自分の性格や傾向を客観的に見てみたい</li>
                <li>・SNS で本音を書くのは少し怖い</li>
                <li>・「じわじわ効いてくる」ツールが好き</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/60 p-6">
              <h3 className="mb-3 text-sm font-medium text-stone-800">
                こんな人には、あまり合わないかも
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>・すぐに劇的な変化だけを求めている</li>
                <li>・他人からの「いいね」や承認がいちばん大事</li>
                <li>・毎日なにかを書くのは絶対に続かない</li>
                <li>・自分のことをじっくり考えるのが苦手</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-md text-center">
          <h2
            className={`mb-4 text-2xl font-medium text-stone-800 sm:text-3xl ${shipporiMincho.className}`}
          >
            基本無料で、ずっと使える
          </h2>
          <p className="mb-8 text-stone-600">
            日記も診断も無料です。
            <br />
            もっと深く知りたくなったときだけ、Premium を検討してください。
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white/80 p-8 backdrop-blur">
            <p className="mb-2 text-sm text-amber-600">Premium</p>
            <p className="mb-1 text-4xl font-medium text-stone-800">
              ¥1,000
              <span className="text-lg font-normal text-stone-500">/月</span>
            </p>
            <p className="mb-6 text-xs text-stone-400">年払いで2ヶ月分お得</p>

            <ul className="mb-8 space-y-3 text-left text-sm text-stone-600">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✓</span>
                日・週・月ごとの心のダッシュボード
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✓</span>
                MBTIタイプと各指標の推移を一覧で振り返り
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✓</span>
                感情キーワードや「よく出てくるテーマ」の集計
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">✓</span>
                公開プロフィールやURLなど、より細かい公開設定
              </li>
            </ul>

            <button
              type="button"
              className="w-full rounded-full border border-stone-300 py-3 font-medium text-stone-700 transition hover:bg-stone-50"
            >
              Premium に申し込む
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-stone-200 px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`mb-4 text-3xl font-medium text-stone-800 sm:text-4xl ${shipporiMincho.className}`}
          >
            今日から、
            <span className="text-amber-700">自分を知る日記</span>
            を。
          </h2>
          <p className="mb-8 text-stone-600">
            書くたびに、少しずつ、自分が見えてきます。
          </p>
          <button
            type="button"
            className="rounded-full bg-amber-600 px-10 py-4 text-lg font-medium text-white shadow-sm transition hover:bg-amber-500"
          >
            無料で日記をはじめる
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50 px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 text-sm text-stone-500 sm:flex-row">
          <p>© 2026 Yohaku</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-stone-700">
              利用規約
            </a>
            <a href="#" className="transition hover:text-stone-700">
              プライバシー
            </a>
            <a href="#" className="transition hover:text-stone-700">
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
