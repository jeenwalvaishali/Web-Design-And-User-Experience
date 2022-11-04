import './App.css';
import { useState } from 'react';
import Tabs from './Tabs';

const defaultFAQs = {
  'home': `
   A home page (or homepage) is the main web page of a website. The term may also refer to the start page shown in a 
   web browser when the application first opens Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Ut dictum, sapien nec mollis tempus, ipsum risus vestibulum erat, non venenatis odio metus ut nunc. 
   Vivamus sit amet tempus libero. Nulla euismod et sem eu suscipit. Aliquam a magna nibh.
   Phasellus fermentum aliquam tincidunt.Pellentesque facilisis purus eu orci gravida suscipit. 
   In dictum orci eget diam efficitur, sed efficitur felis congue. Curabitur fringilla sagittis neque a ultrices. 
   Proin mauris erat, mollis id est vel, pulvinar efficitur tortor. Fusce at lobortis ipsum. Nunc facilisis, nisl id semper vulputate, 
   tortor tortor maximus erat, vel faucibus diam urna et turpis. `,
  'about': `
   The site offers registered users a simple platform from which to link multiple online identities, 
   relevant external sites, and popular social networking websites.Proin feugiat tincidunt tortor, non imperdiet eros varius eget. 
   Phasellus ullamcorper in nibh non feugiat. In tortor urna, pharetra sed bibendum at, faucibus non magna. In faucibus congue odio, 
   fermentum vehicula sem convallis quis. Praesent feugiat maximus est, sed tempor dolor. Maecenas vestibulum auctor auctor. 
   Suspendisse eget dolor convallis, consequat eros id, elementum nunc. Aenean aliquet ante turpis, et bibendum sapien vehicula placerat. 
   Curabitur felis nisl, efficitur nec felis vitae, cursus finibus metus.Suspendisse pharetra euismod eros, sed luctus tortor sagittis volutpat.Duis dignissim vel sem sit amet semper. `,
  'service':`
   A services offered by an company to consumer, advertising with the help of internet to publish and sell their products. 
   Pellentesque est justo, gravida quis hendrerit non, dictum non nunc. 
   Morbi semper ante id augue semper, non rhoncus est pellentesque. Suspendisse potenti. 
   Sed malesuada varius urna. Maecenas vel imperdiet augue. Aliquam viverra ante eros, eget pretium diam vulputate vel. 
   Quisque ut fermentum erat, a tincidunt ante. Maecenas egestas vestibulum sem in dictum. 
   Donec in erat efficitur, posuere metus nec, facilisis orci. Phasellus sed varius lorem. Nulla sollicitudin sagittis libero, 
   eu pharetra augue faucibus a. Vestibulum volutpat at orci eget tincidunt. `,
  'privacy':`
   A privacy policy is a statement or legal document (in privacy law) that discloses some or all of the ways a party gathers, 
   uses, discloses, and manages a customer or client's data.Praesent vehicula laoreet nunc at tempus. Nam tristique nulla nec dui volutpat facilisis. 
   Nunc hendrerit volutpat massa vel accumsan. Praesent vitae dignissim ex, sit amet aliquam leo. Aenean arcu nisi, eleifend in auctor vitae, 
   pellentesque pretium ipsum. Sed sit amet ex condimentum, aliquam justo eu, suscipit urna. Sed vestibulum dui vitae turpis malesuada, 
   sit amet viverra purus efficitur. Vestibulum ultricies ut mi id rhoncus. Nullam a felis laoreet, finibus mauris at, vehicula velit. 
   Fusce vestibulum feugiat turpis sed dictum. Fusce viverra augue ex, sed fringilla nunc imperdiet vitae. 
   Nullam venenatis mauris id urna tristique rhoncus. 
   Donec commodo ipsum in ipsum dignissim, sed volutpat erat viverra. Curabitur maximus cursus ex in volutpat.  `,
  'contact':`
   A contact page is a common web page on a website for visitors to contact the organization or individual providing the website. 
   Vivamus imperdiet pulvinar ex, eu venenatis leo imperdiet ac. Ut volutpat ligula justo, et maximus felis faucibus vitae. 
   Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a tincidunt eros, et lobortis ipsum. 
   Integer semper justo eget iaculis consequat. Maecenas at urna vitae sem fermentum dapibus efficitur a turpis. 
   Nunc aliquet urna id hendrerit lacinia. Ut porta ac elit varius feugiat. Donec malesuada venenatis risus, in ultricies nunc tincidunt a. 
   Nam ligula dui, luctus et pharetra sit amet, imperdiet quis leo.
   `,

};

function App() {
  const [faqs] = useState(defaultFAQs);

  return (
    <div className="app">
      <Tabs entries={faqs}/>
    </div>
  );
}

export default App;
