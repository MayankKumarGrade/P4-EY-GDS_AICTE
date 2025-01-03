import multer from 'multer';

const storage = multer.diskStorage({
    filename:function(req,file,cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({storage});

export default upload;