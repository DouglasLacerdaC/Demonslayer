import { Banner } from "./components/Banner/Banner"
import { Grid } from "./components/Grid/Grid"
import Swiper from "./components/Swiper/Swiper"
import { Thoughts } from "./components/Thoughts/Thoughts"

function App() {

  const firstColumn: any = [
    'https://i.pinimg.com/originals/9b/61/ae/9b61ae7f853a1b732cafc78b7e12e0c0.jpg',
    'https://wallpapers.com/images/high/kimetsu-no-yaiba-akaza-malbsv35j3upi5pw.jpg',
    'https://i.pinimg.com/originals/dc/a6/88/dca688b7b10ae82f67b72e2fee435abe.gif'
  ]
  
  const secondColumn: any = [
    'https://images.alphacoders.com/104/thumb-350-1045045.png',
    'https://i.pinimg.com/474x/bb/d7/ce/bbd7cece63450e0279d3dd0741a1bf5d.jpg',
    'https://64.media.tumblr.com/8dfd672457069128c65c662f3c8ec638/tumblr_pt5ao8YN1J1v6bs4yo5_r1_400.gifv',
    'https://steamuserimages-a.akamaihd.net/ugc/768354632315301824/5B7E132A6FCA28D9A63E55552E53530909498935/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
  ]
  
  const thirdColumn: any = [
    'https://c.tenor.com/uwPmmknc52EAAAAd/inosuke-demon-slayer.gif',
    'https://wallpapercave.com/wp/wp5783885.png',
    'https://i.pinimg.com/474x/99/2c/d6/992cd64a144bff27c1c92e6579e95d3f.jpg',
    'https://i.pinimg.com/originals/7a/69/5d/7a695df9b2a5aab58d722dc60922f713.jpg'
  ]
  
  const fourthColumn: any = [
    'https://images.alphacoders.com/101/thumb-1920-1015202.png',
    'https://i.pinimg.com/564x/54/15/9a/54159ae445b04ed4634005b36132a676.jpg',
    'https://thumbs.gfycat.com/SeveralBigFlyinglemur-max-1mb.gif',
    'https://i.pinimg.com/564x/c0/ee/81/c0ee813fdf2bcc1832cca20756a19437.jpg'
  ]
  
  const fifthColumn: any = [
    'https://i.pinimg.com/736x/2f/f1/39/2ff139d71e56594191b7473f509c910b.jpg',
    'https://1.bp.blogspot.com/-rVtgCJbfmSg/YNxL0AqXyzI/AAAAAAABNqM/muloC2mLMfgL_ISQZEpZf0WnbfnFX7EygCLcBGAsYHQ/w360-h640/Demon%2Bslayer%2BRengoku%2Blive%2Bwallpaper.gif',
    'https://i.pinimg.com/564x/49/f5/11/49f51129a1099e0e66ca00cd312e512c.jpg'
  ]

  return (
    
    <>

      <Swiper />

      <Banner img={'./src/assets/images/bannerTanjiro.png'} />

      <Grid firstColumn={firstColumn}
        secondColumn={secondColumn}
        thirdColumn={thirdColumn}
        fourthColumn={fourthColumn}
        fifthColumn={fifthColumn}
      />

      <Thoughts />
    
    </>
  
  )
}

export default App