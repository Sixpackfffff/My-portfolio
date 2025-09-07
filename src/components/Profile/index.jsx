import React from 'react'
import './index.css'

const Profile = () => {
  return (
    <section className='pro'>
      <div className='about'>About Me</div>
      <div className='container-name'>
       <div className='name'>Ryoma Sato</div>
      </div>
      <div className='sentense'>2002年生まれ、東京都在住。城北高校卒業後、アルバイトをしながら国内外を旅してきました。
22歳のときにはバルセロナ、オランダ、ベルリン、パリを訪れ、翌年にはソウルで友人と共にアート関連のイベントにも参加しました。
こうした旅を通して触れた多様な文化や表現に刺激を受け、Webデザインにも興味を持つようになり、現在はWebデザイナーとしての活動をスタートしています。
多様なデザインやアートに関心があり、企業の広告やホームページ制作から、個人のWebサイト制作まで、幅広い分野に積極的に関わっていきたいと考えています。
      </div>
    <div className='interest'>
      <div className='myfav'>Interest</div>
      <div className='myfav-in'>
       <div className='food'>・グルメ</div>
        <div className='food-in'>自炊も外食も大好きです。最近、銀座に行った際に寄った「支那麺はしご　本店」の排骨坦坦麺は格別でしたので、ぜひ。</div>
       <div className='music'>・音楽</div>
        <div className='music-in'>オールジャンルで聞きますが、最近は海外のシューゲイズを聴きます。Wispの「Your Face」がおすすめです。</div>
       <div className='film'>・映画</div>
        <div className='film-in'>DVDを買い集めるほど好きで、上映会にも行きます。最近、飛行機で見たMichel Gondryの「Eternal Sunshine of the Spotless Mind」はどんな方にも面白いと思います。</div>
      </div>
    </div>
    </section>
  )
}

export default Profile
