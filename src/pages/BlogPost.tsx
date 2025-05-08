import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

interface BlogPosts {
  [key: number]: BlogPost;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // In a real application, this would be fetched from an API
  const blogPosts: BlogPosts = {
    1: {
      title: 'The Importance of Regular Electrical Maintenance',
      content: `
        <p>Regular electrical maintenance is crucial for ensuring the safety and efficiency of your home or business electrical systems. Here's why it matters:</p>
        
        <h2>1. Safety First</h2>
        <p>Electrical systems that aren't properly maintained can pose serious safety risks, including:</p>
        <ul>
          <li>Electrical fires</li>
          <li>Electric shocks</li>
          <li>Short circuits</li>
        </ul>
        
        <h2>2. Cost Savings</h2>
        <p>Regular maintenance can help you save money in the long run by:</p>
        <ul>
          <li>Preventing costly repairs</li>
          <li>Reducing energy consumption</li>
          <li>Extending equipment lifespan</li>
        </ul>
        
        <h2>3. Improved Efficiency</h2>
        <p>Well-maintained electrical systems operate more efficiently, leading to:</p>
        <ul>
          <li>Lower energy bills</li>
          <li>Better performance</li>
          <li>Reduced downtime</li>
        </ul>
      `,
      date: '2024-03-15',
      author: 'Ivan Petrov',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    2: {
      title: 'Smart Home Solutions: A Complete Guide',
      content: `
        <p>Smart home technology is revolutionizing how we live and interact with our homes. Here's everything you need to know:</p>
        
        <h2>1. What are Smart Home Solutions?</h2>
        <p>Smart home solutions integrate various devices and systems to create an automated, efficient living space.</p>
        
        <h2>2. Key Benefits</h2>
        <ul>
          <li>Energy efficiency</li>
          <li>Enhanced security</li>
          <li>Convenience</li>
          <li>Remote control</li>
        </ul>
        
        <h2>3. Popular Smart Home Features</h2>
        <ul>
          <li>Smart lighting</li>
          <li>Thermostat control</li>
          <li>Security systems</li>
          <li>Voice assistants</li>
        </ul>
      `,
      date: '2024-03-10',
      author: 'Maria Ivanova',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    3: {
      title: 'Energy Efficiency Tips for Your Business',
      content: `
        <p>Reducing energy consumption in your business can lead to significant cost savings and environmental benefits.</p>
        
        <h2>1. Lighting Solutions</h2>
        <p>Implement energy-efficient lighting solutions:</p>
        <ul>
          <li>LED lighting</li>
          <li>Motion sensors</li>
          <li>Natural light optimization</li>
        </ul>
        
        <h2>2. HVAC Optimization</h2>
        <p>Improve your heating, ventilation, and air conditioning systems:</p>
        <ul>
          <li>Regular maintenance</li>
          <li>Smart thermostats</li>
          <li>Proper insulation</li>
        </ul>
        
        <h2>3. Equipment Management</h2>
        <p>Optimize your equipment usage:</p>
        <ul>
          <li>Energy-efficient appliances</li>
          <li>Power management systems</li>
          <li>Regular maintenance</li>
        </ul>
      `,
      date: '2024-03-05',
      author: 'Georgi Dimitrov',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    4: {
      title: 'Common Electrical Problems and Their Solutions',
      content: `
        <p>Understanding common electrical problems can help you identify and address issues before they become serious.</p>
        
        <h2>1. Frequent Circuit Breaker Trips</h2>
        <p>Causes and solutions:</p>
        <ul>
          <li>Overloaded circuits</li>
          <li>Short circuits</li>
          <li>Ground faults</li>
        </ul>
        
        <h2>2. Flickering Lights</h2>
        <p>Common causes:</p>
        <ul>
          <li>Loose connections</li>
          <li>Voltage fluctuations</li>
          <li>Faulty fixtures</li>
        </ul>
        
        <h2>3. High Energy Bills</h2>
        <p>Solutions to reduce consumption:</p>
        <ul>
          <li>Energy audit</li>
          <li>Upgrade to efficient appliances</li>
          <li>Smart energy management</li>
        </ul>
      `,
      date: '2024-03-01',
      author: 'Ivan Petrov',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  };

  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <Link to="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500 mb-8">
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 