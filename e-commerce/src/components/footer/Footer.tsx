import footer_logo from '@/assets/logo_big.png'
import instagram_icon from '@/assets/instagram_icon.png'
import pintester_icon from '@/assets/pintester_icon.png'
import whatsapp_icon from '@/assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer container flex flex-col items-center justify-center mt-10'>
      <div className='flex items-center'>
        <img src={footer_logo} alt="" />
        <p className='text-gray-700 text-2xl font-semibold'>STYLEIN</p>
      </div>
      <ul className='flex text-gray-800 text-lg cursor-pointer gap-4 mt-10'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social icon flex gap-4 mt-5 items-center justify-center  border-b-2 border-gray-500 w-full'>
        <div className='footer-icon-container bg-gray-50 p-3 border-b-2 border-gray-100'>
            <img src={instagram_icon} alt="" />
        </div>
        <div className='footer-icon-container bg-gray-50 p-3 border-b-2 border-gray-100'>
            <img src={pintester_icon} alt="" />
        </div>
        <div className='footer-icon-container bg-gray-50 p-3 border-b-2 border-gray-100'>
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright mt-5 flex flex-col items-center gap-4 text-gray-900 text-sm  mb-2">
        <p>Copyright © 2024 Stylein. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
