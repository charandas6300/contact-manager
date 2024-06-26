//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all conts"})
};


//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res)=>{
    console.log(req.body)
    res.status(201).json({message: "Create contact"})
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message: `get contact for ${req.params.id}`})
}


//@desc UPDATE contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message: `Update contact for ${req.params.id}`})
}


//@desc Delete contact
//@route Delete /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}



module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};