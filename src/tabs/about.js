let zeffImg = require("../img/about-zeff.jpg");
let expImg = require("../img/baratie-exp.jpg");

let aboutHTML = `
      <div class="about-sec">
        <div class="about-sec-content">
          <h2>Our Story</h2>
          The Baratie was founded 12 years ago by the renowned former pirate captain, Zeff. After a fateful encounter on the high seas that left him
          and a young boy stranded for 85 days, Zeff sold all his treasure to purchase this unique floating restaurant. His vision: to create a haven
          where all seafarers, regardless of their background, could enjoy exquisite cuisine. <br /> <br />
          From humble beginnings, the Baratie has grown into the East Blue's premier floating restaurant, expanding to include multiple decks and even
          sister ships. <br />
          <span>(This is a website for the fictional restaurant "Baratie" from the series "One Piece")</span>
        </div>
        <div class="about-img">
          <img src="${zeffImg}" alt="zeff" />
        </div>
      </div>
      <div class="about-sec">
        <div class="about-img">
          <img src="${expImg}" alt="" />
        </div>
        <div class="about-sec-content">
          <h2>The Baratie Experience</h2>
          Dining at the Baratie is an adventure in itself. Here's what you can expect:
          <ul>
            <li>Cuisine that blends flavors from all corners of the world</li>
            <li>Lively atmosphere with occasional 'dinner shows' (usually involving rowdy pirates being taught table manners)</li>
            <li>A chance to challenge our chefs to a culinary duel (but be prepared to wash dishes if you lose!)</li>
            <li>The opportunity to dine alongside some of the most infamous names on the high seas</li>
          </ul>
        </div>
      </div>
    `

export {aboutHTML}