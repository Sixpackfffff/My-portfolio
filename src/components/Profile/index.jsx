import React from 'react'
import './index.css'

const Profile = () => {
  return (
    <section className='pro'>
      <div className='about'>About Me</div>
      <div className='container-name'>
       <div className='name'>Ryoma Sato</div>
      </div>
      <div className='sentense'>2002年生まれ、東京都在住。城北高校卒業後は、アルバイトとバンド活動をしながら国内外を旅してきました。
22歳のときにはバルセロナ、オランダ、ベルリン、パリを訪れ、翌年にはソウルで友人と共にアートイベントに出演。多様な文化や表現に触れるなかで、Webデザインに強く惹かれるようになりました。
現在はWebデザイナーとして活動をスタートし、企業の広告・ホームページ制作から、個人のWebサイト制作まで幅広く手がけています。
デザインやアートの多様性を大切にし、見る人・使う人にとって心地よい体験を届けられるよう心がけています。
      </div>
    <div>
      <div className='my-band'>〜ここで少し、私の音楽活動についてもご紹介します。〜</div>
      <div className='my-band-detail1'>休日は主にサイケデリックロックを中心としたバンドで活動しており、ライブ出演や楽曲制作に力を入れています。</div>
<div className='my-band-detail2'>過去には、浅野忠信さんが参加されているバンド「SODA!」と同じイベントに出演したほか、代々木公園で毎年春に開催されるフェス「春風」にも出演しました。
また、コンテンポラリーダンサーの羽鳥直人さん（Instagramフォロワー3万人超）のアカウントで、私たちの楽曲を使用していただく機会もありました。</div>
<div className='url-dance'>
        <a href= "https://www.instagram.com/reel/DO7QSGNE5_i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" >実際の動画です。</a>
    </div>
  </div>
    <div className='interest'>
      <div className='myfav'>Interest</div>
      <div className='myfav-in'>
       <div className='food'>・グルメ</div>
        <div className='food-in'>自炊も外食も大好きです。最近では、シンガポールへ行った際に食べたバクテーが忘れられず、自分で作りました。再現度は高めでした。</div>
       <div className='music'>・音楽</div>
        <div className='music-in'>オールジャンルで聴きます。が、最近はDoom MetalやSludge Metalが好きです。一言で言うと、リラックスできるメタルです。メタルですが、休憩にコーヒーを片手に聴くことをお勧めします。</div>
       <div className='film'>・映画</div>
        <div className='film-in'>DVDを買い集めるほど好きで、上映会にも行きます。先日、ヨーロッパから帰る際に飛行機で見た、Michel Gondryの「Eternal Sunshine of the Spotless Mind」は面白かったです。ジムキャリーが出演しますので、笑いあり、涙ありのどんでん返し映画でした。</div>
      </div>
    </div>
    </section>
  )
}

export default Profile
