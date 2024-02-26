
import './globals.css';
import { Auth } from './component/auth';

function Page() {
  return (
    <div className='h-lvh'>
      <div className="grid grid-cols-3 h-full">
        <div className="bg-slate-50">bg</div>
        <div className="col-span-2 bg-red-400 flex items-center justify-center">
          <Auth/>
        </div>
      </div>
    </div>
  );
}

export default Page;


