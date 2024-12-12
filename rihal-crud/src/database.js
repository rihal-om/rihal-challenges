import Dexie from 'dexie';

const db = new Dexie('StudentDatabase');
db.version(1).stores({
  students: '++id, name, class_id, country_id, date_of_birth',
  classes: '++id, class_name',
  countries: '++id, name',
});

db.on('populate', () => {
    db.classes.bulkAdd([
      { class_name: 'Math' },
      { class_name: 'Science' },
    ]);
    db.countries.bulkAdd([
      { name: 'USA' },
      { name: 'India' },
    ]);
  });
  

export default db;
