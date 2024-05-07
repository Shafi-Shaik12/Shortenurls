
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const ShortenUrls = require('./model/Schemas');
// const cors = require('cors');

// mongoose.connect('mongodb+srv://smdshafi1414:Shaikshafi1@cluster0.bak5qfx.mongodb.net/ShortenUris', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("DB connected");
// })
// .catch((err) => {
//     console.error("DB connection error:", err);
// });

// app.use(express.json());
// app.use(cors());


// app.post('/shortenurls/shorten', async (req, res) => {
//     const { full } = req.body;
    
//     try {
//         const existingShortUrl = await ShortenUrls.findOne({ full });
//         if (existingShortUrl) {
//             res.json(existingShortUrl);
//             return;
//         }
        
//         const shortUrl = new ShortenUrls({ full });
//         await shortUrl.save();
//         res.json(shortUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.get('/shortenurls', async (req, res) => {
//     try {
//         const urls = await ShortenUrls.find();
//         res.json(urls);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.get('/:short', async (req, res) => {
//     const { short } = req.params;
    
//     try {
//         const url = await ShortenUrls.findOne({ short });
//         if (!url) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.redirect(url.full);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.delete('/shortenurls/delete/:id', async(req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedUrl = await ShortenUrls.findByIdAndDelete(id);
//         if (!deletedUrl) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.json({ message: "URL deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.listen(5050, () => {
//     console.log("Server is running");
// });

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const ShortenUrls = require('./model/Schemas');
// const cors = require('cors');
// require('dotenv').config()
// const port=process.env.PORT
// mongoose.connect(process.env.Mongo_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("DB connected");
// })
// .catch((err) => {
//     console.error("DB connection error:", err);
// });

// app.use(express.json());
// app.use(cors());


// app.post('/shortenurls/shorten', async (req, res) => {
//     const { full } = req.body;
    
//     try {
//         const existingShortUrl = await ShortenUrls.findOne({ full });
//         if (existingShortUrl) {
//             res.json(existingShortUrl);
//             return;
//         }
        
//         const shortUrl = new ShortenUrls({ full });
//         await shortUrl.save();
//         res.json(shortUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.get('/shortenurls', async (req, res) => {
//     try {
//         const urls = await ShortenUrls.find();
//         res.json(urls);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });


// app.get('/:short', async (req, res) => {
//     const { short } = req.params;
    
//     try {
//         const url = await ShortenUrls.findOne({ short });
//         if (!url) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.redirect(url.full);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.delete('/shortenurls/delete/:id', async(req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedUrl = await ShortenUrls.findByIdAndDelete(id);
//         if (!deletedUrl) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.json({ message: "URL deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.listen(port, () => {
//     console.log("Server is running");
// });
// require('dotenv').config();

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const ShortenUrls = require('./model/Schemas');
// const cors = require('cors');

// const port = process.env.PORT || 5050;
// const mongoUrl = process.env.Mongo_url;

// mongoose.connect(mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log("DB connected");
// })
// .catch((err) => {
//     console.error("DB connection error:", err);
// });

// app.use(express.json());
// app.use(cors());

// app.post('/shortenurls/shorten', async (req, res) => {
//     const { full } = req.body;
    
//     try {
//         const existingShortUrl = await ShortenUrls.findOne({ full });
//         if (existingShortUrl) {
//             res.json(existingShortUrl);
//             return;
//         }
        
//         const shortUrl = new ShortenUrls({ full });
//         await shortUrl.save();
//         res.json(shortUrl);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.get('/shortenurls', async (req, res) => {
//     try {
//         const urls = await ShortenUrls.find();
//         res.json(urls);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.get('/:short', async (req, res) => {
//     const { short } = req.params;
    
//     try {
//         const url = await ShortenUrls.findOne({ short });
//         if (!url) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.redirect(url.full);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.delete('/shortenurls/delete/:id', async(req, res) => {
//     const { id } = req.params;

//     try {
//         const deletedUrl = await ShortenUrls.findByIdAndDelete(id);
//         if (!deletedUrl) {
//             res.status(404).json({ message: "URL not found" });
//             return;
//         }
//         res.json({ message: "URL deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ShortenUrls = require('./model/Schemas');
const cors = require('cors');

const port = process.env.PORT || 5050;
const mongoUrl = process.env.Mongo_url;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.error("DB connection error:", err);
});

app.use(express.json());
app.use(cors());

app.post('/shortenurls/shorten', async (req, res) => {
    const { full } = req.body;
    
    try {
        const existingShortUrl = await ShortenUrls.findOne({ full });
        if (existingShortUrl) {
            res.json(existingShortUrl);
            return;
        }
        
        const shortUrl = new ShortenUrls({ full });
        await shortUrl.save();
        res.json(shortUrl);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/shortenurls', async (req, res) => {
    try {
        const urls = await ShortenUrls.find();
        res.json(urls);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.get('/:short', async (req, res) => {
    const { short } = req.params;
    
    try {
        const url = await ShortenUrls.findOne({ short });
        if (!url) {
            res.status(404).json({ message: "URL not found" });
            return;
        }
        res.redirect(url.full);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.delete('/shortenurls/delete/:id', async(req, res) => {
    const { id } = req.params;

    try {
        const deletedUrl = await ShortenUrls.findByIdAndDelete(id);
        if (!deletedUrl) {
            res.status(404).json({ message: "URL not found" });
            return;
        }
        res.json({ message: "URL deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
