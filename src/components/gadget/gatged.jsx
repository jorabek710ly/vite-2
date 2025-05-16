import React from 'react';
const Gadget = ({ id, title, subtitle, description, categories, deal, purchasingButton, backgroundImage, color, colorButton }) => {

    return (
        <section className='section_gadget'>
            <div className='xl:mx-auto xl:max-w-[1392px] xl:w-full'>
                <div style={{ background: `url(${backgroundImage}) no-repeat center/cover`, color: `${color}` }} className='gadget_wrapper flex flex-col items-center pt-[48px] pb-[35px] justify-between min-h-[90dvh] sm:min-h-[810px] mt-[40px]'>
                    <div className='gadget_top mx-auto flex flex-col items-center gap-[16px] w-[95%] min-[550px]:w-full bg-white/50 min-[550px]:backdrop-blur-none min-[550px]:bg-transparent backdrop-blur-sm py-[24px] px-[14px]'>
                        <h1 className="title">{title}</h1>
                        <ul className="flex flex-col gap-[12px] min-[550px]:flex-row items-center md:gap-[45px]">
                            {
                                categories?.map((category, index) => (
                                    <li key={index}><span className="category_title text-nowrap">{category}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='gadget_bottom mx-auto flex flex-col items-center gap-[20px]'>
                        <h2 className="subtitle text-center w-[95%] mx-auto sm:mx-0 sm:w-full">{subtitle}</h2>
                        <p className="desc mx-auto w-[90%] text-center">{description}</p>
                        <div className="flex items-center gap-[12px]">
                            <button style={{ borderColor: `${color}` }} className="deal_btn_text hover:!border-b-[2px]" href="#">{deal}</button>
                            <button style={{ color: `${colorButton}`, background: `${color}` }} className="btn deal_btn_text">{purchasingButton}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gadget;