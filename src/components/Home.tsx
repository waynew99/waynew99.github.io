import MenuBar from './MenuBar';
import HomeTextLines from './HomeTextLines';
import Works from './Works';


export default function Home() {
  return (
    <div className='justify-center'>
      <MenuBar />
      <HomeTextLines />
      <Works />
    </div>
  );
}