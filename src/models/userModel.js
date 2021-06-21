

  // Create a Tutorial
  const shoe = {
    name: req.body.name,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
