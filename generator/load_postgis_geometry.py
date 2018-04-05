import records
import shapely.wkb

def get_geom():
    db = records.Database('postgres://postgres@localhost/routing')
    rows = db.query('select the_geom from ways limit 1')
    return rows.first()

def convert_geom(geom):
    return shapely.wkb.loads(geom, hex=True)

if __name__ == "__main__":
    row = get_geom()
    print(convert_geom(row['the_geom']))