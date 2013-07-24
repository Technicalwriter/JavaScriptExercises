/**
 * Section 1 -- Basic Syntax
 * Question: 1) Randomizes three numbers in range (0.. 100) and prints the largest one.
 */
<!DOCTYPE html>
<html>
<body>

<script type="text/javascript">

var x = (Math.random() * (100 - 0));
var y = (Math.random() * (100 - 0));
var z = (Math.random() * (100 - 0));

var max = Math.max(x,y,z)

document.write(max)

</script>

</body>
</html> 


/**
 * Showing work
 * First, I see an answer in basic. Then, I translate it into javascript. Then, I apply the DRY philosophy
 * math.random => x
 * math.random => y
 * math.random => z
 * 
 * if x>y than x=>y
 * if y>z than y=>z
 * print z
 * 
 * 
 * 
 * 
 * 
 */
