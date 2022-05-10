const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1MIEa5bF6rPey9VCKzKWL9_mkYmbn_m2-1HSfVLmHU70')
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
    console.log(`Title:${sheet.title}, Rows: ${sheet.rowCount}`);
}

accessSpreadsheet()