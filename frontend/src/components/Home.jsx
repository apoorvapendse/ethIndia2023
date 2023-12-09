<<<<<<< HEAD
<<<<<<< HEAD
import {Link} from 'react-router-dom'
import { PlanCard,Button,Typography } from '@web3uikit/core';
const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <div key={0}
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
>
  <PlanCard
    backgroundColor="#F0F8FF"
    ctaButton={<Button isFullWidth text="Your Current Plan" theme="primary"/>}
    description={<Typography color="#5B8DB9" variant="caption14" weight="550">Free to get started</Typography>}
    features={[
      'Unlimited ideas',
      'Unlimited Plugins',
      'Community Support',
      'IPFS Gateway'
    ]}
    featuresIconColor="#A8AFB7"
    height="606px"
    horizontalLine
    isCurrentBillingPeriod
    isCurrentPlan
    onChange={function noRefCheck(){}}
    price={<Typography color="#041836" variant="h1" weight="700">$257</Typography>}
    themeColor="#00D1AE"
    title="Grand HAck"
    width="285px"
  />
</div>

<div key={2}
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
>
  <PlanCard
    backgroundColor="#F0F8FF"
    ctaButton={<Button isFullWidth text="Your Current Plan" theme="primary"/>}
    description={<Typography color="#5B8DB9" variant="caption14" weight="550">Free to get started</Typography>}
    features={[
      'Unlimited ideas',
      'Unlimited Plugins',
      'Community Support',
      'IPFS Gateway'
    ]}
    featuresIconColor="#A8AFB7"
    height="606px"
    horizontalLine
    isCurrentBillingPeriod
    isCurrentPlan
    onChange={function noRefCheck(){}}
    price={<Typography color="#041836" variant="h1" weight="700">$257</Typography>}
    themeColor="#00D1AE"
    title="Ponoy"
    width="285px"
  />
</div>

   <div key={3}
  style={{
    display: 'flex',
    flexDirection: 'column'
  }}
>
  <PlanCard
    backgroundColor="#F0F8FF"
    ctaButton={<Button isFullWidth text="Your Current Plan" theme="primary"/>}
    description={<Typography color="#5B8DB9" variant="caption14" weight="550">Free to get started</Typography>}
    features={[
      'Unlimited ideas',
      'Unlimited Plugins',
      'Community Support',
      'IPFS Gateway'
    ]}
    featuresIconColor="#A8AFB7"
    height="606px"
    horizontalLine
    isCurrentBillingPeriod
    isCurrentPlan
    onChange={function noRefCheck(){}}
    price={<Typography color="#041836" variant="h1" weight="700">$257</Typography>}
    themeColor="#00D1AE"
    title="Keke"
    width="285px"
  />

  
</div>

    </>
  )
}

=======
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
    <h1>Home</h1>
    <Link to={"/mint"}>mintNFT</Link>
    </>
  )
}

>>>>>>> 9b93d2e2e86d811d72aa3777c68ddde2063258ac
=======
import {Link} from 'react-router-dom'
import NavBar from './Navbar'
const Home = () => {
  return (
    <>
    <NavBar/>
    <h1>Home</h1>
    </>
  )
}

>>>>>>> 1a4e078325c592355fac23a4af3da3a59d0bc43f
export default Home