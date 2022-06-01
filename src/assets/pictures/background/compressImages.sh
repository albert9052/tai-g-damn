#!/bin/bash

echo "resize image who is bigger than 1000k";

for i in `find . -size +1000k`;

do

	convert $i -resize 50% $i;

	echo "resize image $i to 50%";

done
