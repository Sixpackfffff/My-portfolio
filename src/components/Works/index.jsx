import React from 'react'
import './index.css'

const Works = () => {
  return (
    <section className='container-of-works'>
      <div className='title-of-works'>Works</div>
      <div className='works-of-faicari'>1.ファイキャリ（経理の転職サイト）のランディングページ</div>
      <div class="works-grid">
        <img src="/F1.png" alt="作品1" />
        <img src="/F2.png" alt="作品2" />
        <img src="/F3.png" alt="作品3" />
        <img src="/F4.png" alt="作品4" />
        <img src="/F5.png" alt="作品5" />
        <img src="/F6.png" alt="作品6" />
        <img src="/F7.png" alt="作品7" />
       </div>
       <div className='url-faicari'>
        <a href= "https://fincari-lp.vercel.app/" >こちら実際のURLになります</a>
       </div>
       <div className='purpose-of-faicari'>
        <div>＜製作目的・背景＞</div>
        <div>経理に携わる人を目的とした転職相談や斡旋に関するLPを制作
             コーディングをすべて1人で担当。
        </div>
       </div>
       <div className='content-of-faicari'>
        <div>＜製作内容＞</div>
        <div>コードの保守性を意識し、React,HTML,CSSを用いてBEM設計とコンポーネント志向で構築
             初見ユーザーの離脱を防ぐファーストビューのビジュアル設計。
        </div>
       </div>
      <div className='works-of-xaeveax'>2.アパレル系ハイブランドのコレクション特設サイト（架空）</div>
      <div class="works-grid2">
        <img src="/X1.png" alt="作品1" />
        <img src="/X6.png" alt="作品2" />
        <img src="/X2.png" alt="作品3" />
        <img src="/X7.png" alt="作品4" />
        <img src="/X3.png" alt="作品5" />
        <img src="/X8.png" alt="作品6" />
        <img src="/X4.png" alt="作品7" />
        <img src="/X9.png" alt="作品8" />
        <img src="/X5.png" alt="作品9" />
        <img src="/X10.png" alt="作品10" />
       </div>
       <div className='purpose-of-xaeveax'>
        <div>＜製作目的・背景＞</div>
        <div>架空のラグジュアリーファッションブランド「Xaeveax」の2025年春夏コレクションのアーカイブ用LPを制作
             シーズンビジュアルやルックを洗練されたUIで表現することを目的に、ブランディング重視のサイト構成を意識。
        </div>
       </div>
       <div className='content-of-xaeveax'>
        <div>＜製作内容＞</div>
        <div>ファイキャリの時と同様、React,HTML,CSSを用いてBEM設計とコンポーネント志向で構築
             ファーストビューはビジュアル1枚で語る設計（背景に全画面のルック写真＋淡いトーンのロゴを配置）
             シンプルな配色かつデザイン性のあるフォントを使うことで、ブランド本来のデザイン性を前面に出せるように製作。
        </div>
       </div>
      <div className='my-contact'>
       <div className='my-adress'>Contact here:</div>
       <div className='adress'>ryomaparabusiness@gmail.com</div>
      </div>
    </section>
  )
}

export default Works
