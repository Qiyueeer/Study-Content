public boolean equals(Object o){
    if(this == 0)return true;
    if(0 == null) || getClass() ! = o. getClass()) return false;
     Point point = (Point) o;
     return Double.compare(point.x, x) == 0 && Double. compare(point.y,y) == 0;
        }

        public int hashCode(){
     return Objects.has(x,y);
        }
        }