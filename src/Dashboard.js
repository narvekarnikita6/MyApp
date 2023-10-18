import React from 'react';
import './Dashboard.css';
import { Outlet, Link,useLocation  } from 'react-router-dom';
import dashboardIcon from './Dashboard-icon.png';
import productIcon from './Product-icon.png';
import IncomeIcon from './income-icon.png';
import CustomersIcon from './Customer-icon.png';
import PromoteIcon from './Promote-icon.png';
import HelpIcon from './Help-icon.png';
import card1Image from './card1.png';
import card2Image from './card2.png';
import card3Image from './card3.png';
import card4Image from './card4.png';
import img1 from './img1.png';
import img2 from './img2.png';
import {Chart,registerables} from 'chart.js';
import  { useEffect } from 'react';
import { BarController } from "chart.js";


Chart.register(...registerables);


const Dashboard = () => {
  
 
  useEffect(() => {
    // Get the canvas element
    const ctx = document.getElementById('bar-chart').getContext('2d');

    // Data for the bar chart (you can customize this data)
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label:'Monthly Earning',
          data: [30, 25, 50, 35, 45, 20, 40, 50, 45, 35, 30, 50],
          backgroundColor: ['#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#7F38EC', '#D3D3D3', '#D3D3D3', '#D3D3D3', '#D3D3D3'],
          borderColor: 'white', // Bar border color
          borderWidth: 0,
          borderRadius: {
            topLeft: 10, // Set the border radius for the top-left corner
            topRight: 10, // Set the border radius for the top-right corner
            bottomLeft: 10, // Set the border radius for the top-left corner
            bottomRight: 10, // Set the border radius for the top-right corner
          },
          borderSkipped: false, // To make all side rounded
           
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
      plugins: {
            title: {
            display: true,
            text: 'Overview', // Replace with your desired chart title
            font: {
              weight: 'bold',
              size: 16,
                  },
            color: 'black', // Change the color to your desired color
            position: 'top', // Position the title at the top of the chart
            align: 'start',
                 },
              },
  
        scales: {
          x: {
              grid: {
              display: false, // Remove x-axis gridlines
                     },
              ticks: {
              color: 'black', // Change the color to your desired color
              font: {
                weight: 'bold', // Make the labels bold
                    },
                padding: 20,
                      },
               },

          y: {
              display: false, // Remove y-axis gridlines   
            },
               },
    
          
      },
      
    });
   
       return () => {
            // Clean up the chart when the component unmounts
             chart.destroy();
        };
     }, []); // Ensure this effect runs only once on component mount

 
 

  useEffect(() => {
  
      const canvas = document.getElementById('custom-pie-chart');
      const ctx = canvas.getContext('2d');
    
      const data = [
        { label: 'Label 1', value: 25, color: '#f252a7', outerRadius: 100, innerRadius: 60 },
        { label: 'Label 2', value: 40, color: '#7F38EC', outerRadius: 97, innerRadius: 65 },
        { label: 'Label 3', value: 35, color: '#D3D3D3', outerRadius: 92, innerRadius: 70 },
      ];
    
      const total = data.reduce((sum, segment) => sum + segment.value, 0);
      let startAngle = -Math.PI / 2;
      
      data.forEach((segment) => {
        const segmentAngle = (segment.value / total) * 2 * Math.PI;
    
        // Draw outer circle segment
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          segment.outerRadius,
          startAngle,
          startAngle + segmentAngle
        );
        ctx.closePath();
        ctx.fillStyle = segment.color;
        ctx.fill();
    
        // Draw inner circle segment
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          segment.innerRadius,
          startAngle,
          startAngle + segmentAngle
        );
        ctx.closePath();
        ctx.fillStyle = 'white'; // Color of the inner circle
        ctx.fill();

        const centerX = canvas.width / 3.5 + (segment.outerRadius + segment.innerRadius) / 2;
        const centerY = canvas.height / 2;
        
        // Add text in the center of the segment
        ctx.fillStyle = 'black'; // Text color
        ctx.font = 'bold 20px Arial'; // Text font and size
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('65%' , centerX, centerY);

        ctx.font = '10px Arial'; // Text font with a smaller font size

        ctx.fillText('Total New', centerX, centerY + 20); // Adjust the Y position
        ctx.fillText('Customers', centerX, centerY + 30); // Adjust the Y position
         
        ctx.font = ' bold 16px Arial'
        ctx.textAlign = 'left'; // Align to the right
        ctx.fillText('Customers',30,20); // Adjust position as needed

        ctx.fillStyle = 'gray'; // Text color
        ctx.font = ' 12px Arial'
        ctx.fillText('Customers that buy products',25, 35); // Adjust position as needed



      
    
      startAngle += segmentAngle;
    });
  
  }, []); // Ensure this effect runs only once on component mount
  

  return (
    <div>
      <div className="dashboard-page">
        <div className="dashboard-column">
          <div className="dashboard-heading">
           
           <h4> <img src={dashboardIcon} alt="dashboard Icon" className="link-icon" />  Dashboard </h4>
                
          </div>
          <nav>
            <ul className="link-list">
              <li>
                <Link to="/Product" className="custom-link small-link " style={{ backgroundColor: '#2b3e7d', padding: '2px 5px' }}>
                <img src={dashboardIcon} alt="dashboard Icon" className="link-icon" /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/Product" className="custom-link small-link">
                <img src={productIcon} alt="Product Icon" className="link-icon" /> Product
                </Link>
              </li>
              <li>
                <Link to="/income" className="custom-link small-link">
                <img src={IncomeIcon} alt="Product Icon" className="link-icon" /> Income
                </Link>
              </li>
              <li>
                <Link to="/Customers" className="custom-link small-link">
                <img src={CustomersIcon} alt="Product Icon" className="link-icon" /> Customers
                </Link>
              </li>
              <li>
                <Link to="/Customers" className="custom-link small-link">
                <img src={PromoteIcon} alt="Product Icon" className="link-icon" /> Promote
                </Link>
              <li>
                <Link to="/Customers" className="custom-link small-link">
                <img src={HelpIcon} alt="Product Icon" className="link-icon" /> Help
              </Link>
              </li> 
              </li>


              <div  className='dropdown1'>
           <select id="filter" name="filter">
           <option value="option1"> 👩🏻 Miss Nikita</option>
           <option value="option2"> 👨 Mr.Evano</option>
           <option value="option3"> 👨 Mr.Omkar</option>
           </select>
             </div>   

            </ul>
          </nav>
        </div>
       

        <div className="content-column">
          <div className="text-container" style={{fontSize: '15px', fontWeight: 'Bold'}}>Hello Shahruk 👋🏻</div>
          <div className="search-bar">
          <input type="text" placeholder="🔍 Search" />  
          </div>
        <div className="cards-content" >
         <div className="cards-container">


           <div className="card">
             <div className="cards-container">
                <img src={card1Image} alt="card1 Image" className="card-image" />
              <div className="card-content">
                <div className="earning" >Earnings</div>   
                <b><div className="amount">$198k</div></b>             
                <div className="percentage">↑37.18% this month</div>
              </div>
             </div>
           </div>
         
          <div className="card">
            <div className="cards-container">
             <img src={card2Image} alt="card2 Image" className="card-image" />
               <div className="card-content">
                <div className="earning" >orders</div>  
                <b><div className="amount">$2.4k</div></b>            
                <div className="percentage">↓2% this month</div>
               </div>
            </div>
          </div>

          <div className="card">
            <div className="cards-container">
               <img src={card3Image} alt="card3 Image" className="card-image" />
              <div className="card-content">
                <div className="earning" >Balance</div> 
                <b><div className="amount">$2.4k</div></b>             
                <div className="percentage">↓2% this month</div>
              </div>
            </div>
          </div>

            <div className="card"> 
              <div className="cards-container">
               <img src={card4Image} alt="card3 Image" className="card-image" />
               <div className="card-content">
                 <div className="earning" >total Sales</div>  
                 <b><div className="amount">$89k</div></b>            
                 <div className="percentage">↑11% this month</div>
                </div>
              </div>
            </div>

        </div>
        </div>



          <div className="cards-container">
            <div className="chart-card" >


          <div  className='dropdown2'>
           <select id="filter" name="filter">
           <option value="option1">Quarterly</option>
           <option value="option2">Monthly</option>
           <option value="option3">Yearly</option>
           </select>
          </div>     


            <canvas id="bar-chart" class="chart-canvas" width="400" height="200"></canvas>
            </div>
            <div className="pie-chart-card">
            <canvas id="custom-pie-chart" width="400" height="300"></canvas>
            </div>
           </div>  
         
         
         <div className="table-card">
        
          <div className="card-content">
          <div>Product Sell </div>
          <div className="search-bar2">
          <input type="text" placeholder="🔍 Search" /> 
         
         </div> 

         <div className="dropdown3">
     
       <select id="filter" name="filter">
        <option value="option1">Last 30days</option>
        <option value="option2">Last 20days</option>
        <option value="option3">Last 10days</option>
        </select>
       </div>    
          
          <table className="table">
            
          <thead>
          <tr>
          <th style={{ width: '1000px', textAlign: 'left' , color: 'gray', fontSize: '12px', fontWeight: 'normal' }}>Product Name</th> {/* Adjust the width as needed */}
          <th style={{ width: '200px', textAlign: 'centre', color: 'gray', fontSize: '12px', fontWeight: 'normal' }}>Stock</th> {/* Adjust the width as needed */}
          <th style={{ width: '200px', textAlign: 'centre', color: 'gray', fontSize: '12px', fontWeight: 'normal' }}>Price</th> {/* Adjust the width as needed */}
          <th style={{ width: '200px', textAlign: 'centre', color: 'gray', fontSize: '12px', fontWeight: 'normal' }}>Total Sales</th> {/* Adjust the width as needed */}

        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ textAlign: 'left' }} className="img-container1 img-text"> 
           <img src={img1} alt="Image Alt Text" className="image-icon "/> Abstract3D      
             </td>
          <td style={{fontSize: '10px', fontWeight: 'normal'}}>32 in stock</td>
          <td style={{fontSize: '15px', fontWeight: 'Bold'}}>$45.99</td>
          <td style={{fontSize: '12px', fontWeight: 'normal'}}>20</td>
        </tr>
        <tr>
        <td style={{ textAlign: 'left' }} className="img-container2 img-text" > 
           <img src={img2} alt="Image Alt Text"  className="image-icon "  />
           Sarphenas Illustration           
             </td>
             <td style={{fontSize: '10px', fontWeight: 'normal'}}>32 in stock</td>
             <td style={{fontSize: '15px', fontWeight: 'Bold'}}>$45.99</td>
             <td style={{fontSize: '10px', fontWeight: 'normal'}}>20</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

       

       </div>
       
       </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
