const contentfulManagement = require("contentful");

module.exports = async function () {
  const client = await contentfulManagement.createClient({
    accessToken: "dvb9M3sF_ssNQb2oSwuFa32vzVTeY7hbSLuSY8R59-k",
    space: "6208krsfb26h",
  });

  return client.getSpace().then(space => space);
};
