import Banner from '@/components/banner';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <Banner />
      <Welcome />
    </div>
  );
}
