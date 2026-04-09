# Free Google Reviews - Manual Update Guide

## How to Update Your Reviews (Completely Free!)

### Step 1: Find Your Google Reviews
1. Go to [Google Maps](https://maps.google.com)
2. Search for "University Heating & Cooling San Angelo TX"
3. Click on your business listing
4. Scroll down to the "Reviews" section

### Step 2: Copy Review Details
For each review you want to add, copy:
- **Customer Name** (e.g., "John Smith")
- **Rating** (number of stars: 1-5)
- **Review Text** (the full review content)
- **Time Posted** (e.g., "3 months ago", "2 weeks ago")

### Step 3: Update the Code
1. Open `components/Testimonials.js`
2. Find the `googleReviews` array
3. Replace or add new review objects:

```javascript
{
  name: "John Smith",           // Customer name from Google
  location: "San Angelo, TX",   // Keep as is
  rating: 5,                    // Number of stars (1-5)
  text: "Amazing service! They were professional and fixed my AC quickly.", // Full review text
  service: "AC Repair",         // What service they mentioned
  time: "2 weeks ago",          // When posted (from Google)
  verified: true                // Always true for Google reviews
}
```

### Step 4: Update Frequency
- **Weekly**: Check for new 5-star reviews
- **Monthly**: Update timestamps (e.g., "1 month ago" → "2 months ago")
- **As Needed**: Replace older reviews with newer ones

## Tips for Great Reviews

### Which Reviews to Feature:
- ✅ **5-star reviews** (best social proof)
- ✅ **Detailed reviews** (more trustworthy than short ones)
- ✅ **Recent reviews** (within last 6 months)
- ✅ **Specific mentions** (AC repair, heating, emergency service)

### What to Avoid:
- ❌ Fake or made-up reviews
- ❌ Reviews from competitors
- ❌ Inappropriate or offensive content

## Benefits of Manual Updates

- **100% Free** - No API costs or subscriptions
- **Complete Control** - Choose which reviews to show
- **Always Current** - Update as often as you want
- **SEO Friendly** - Fresh content helps search rankings
- **Trust Building** - Real customer voices build credibility

## Quick Update Checklist

- [ ] Check Google for new 5-star reviews
- [ ] Copy customer name, rating, and review text
- [ ] Update timestamps on existing reviews
- [ ] Replace oldest reviews with newest ones
- [ ] Test website to ensure reviews display correctly

## Need Help?

If you need help formatting a review or have questions about which reviews to choose, just ask! The goal is to showcase your best customer feedback to attract new clients.