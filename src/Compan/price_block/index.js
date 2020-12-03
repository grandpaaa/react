import React from 'react';
import './style.css';

function Price_block(){

    const goods = [
        {
            img: 'http://scientia.themerex.net/wp-content/uploads/2019/06/8pr-copyright-500x500.png',
            title: 'The Life Lessons',
            description: 'The Life Lessons is the book about self education and...',
            price: '65',
            prisesup: '00'
        },
        {
            img: 'http://scientia.themerex.net/wp-content/uploads/2019/06/1pr-copyright-500x500.png',
            title: 'The Untold Tales',
            description: 'One of the biggest art projects in the world of...',
            price: '62',
            prisesup: '00'
        },
        {
            img: 'http://scientia.themerex.net/wp-content/uploads/2019/06/2pr-copyright-500x500.png',
            title: 'Hobbye Lobbye',
            description: 'A great story about politicians and their secret private life...',
            price: '49',
            prisesup: '00'
        },
        {
            img: 'http://scientia.themerex.net/wp-content/uploads/2019/06/7pr-copyright-500x500.png',
            title: 'Where They Sing',
            description: 'The best selling novel of all times about love and...',
            price: '58',
            prisesup: '00'
        }
    ]

    const goods_print = goods.map((item, i) =>
    <div className="gallery-grid" key={i}>
        <div className="grid-item">
            <div className="grid-item_inner">
                <img src={item.img} className="grid-item_img"></img>
                <div className="grid-item_title">
                    <a href="#"><i class="fa fa-shopping-basket" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-link" aria-hidden="true"></i></a>
                </div>
            </div>
            <h2><a href="#">{item.title}</a></h2>
            <p>{item.description}</p>
            <h1>${item.price}<sup>{item.prisesup}</sup></h1> 
        </div>
    </div>)

    return(
        <div className="price">
            <div className="price_top">
                <h1>New & Notable</h1>
                <div className="line"></div>
            </div>
            <div className="price_block">
                {goods_print}
            </div>
        </div>
    )
}
export default Price_block;

