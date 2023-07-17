
import { MarketPlaceMenu } from './components/MarketPlaceMenu';
import { ProfileMenu } from './components/ProfileMenu';
import { SignInSignUpMenu } from './components/SignSignUpMenu';

export default function Home() {
  return (<main className='flex flex-row gap-2'>
        <SignInSignUpMenu />
        <ProfileMenu />
        <MarketPlaceMenu />
  </main>)
}
