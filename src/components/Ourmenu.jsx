import React, { Component } from 'react'

class Ourmenu extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-6">
                    <h1 className='ourname mt-5'>Our Name</h1><br />
                    <h4>Bread Basket</h4>
                    <p className='ourmenu'>Assortment of fresh baked fruit breads and muffins 5.50</p><br />
                    <h4>Honey Almond Granola with Fruits</h4>
                    <p className='ourmenu'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />
                    <h4>Belgian Waffle</h4>
                    <p className='ourmenu'>Vanilla flavored batter with malted flour 7.50</p><br />
                    <h4>Scrambled eggs</h4>
                    <p className='ourmenu'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />
                    <h4>Blueberry Pancakes</h4>
                    <p className='ourmenu'>With syrup, butter and lots of berries 8.50</p>
                </div>
                <div className="col-12 col-sm-6 col-md-6">
                    <img src="https://www.w3schools.com/w3css/img_tablesetting.jpg" className='tablesetting'alt="" />
                </div>
            </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Ourmenu