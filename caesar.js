function caesar(text, n){

		var lowercase = 'abcdefghijklmnopqrstuvwxyz';
		var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var regexLowercase = /[a-z]/;
		var regexUppercase = /[A-Z]/;

		n = Number(n);
		var length = text.length;
		var result = "";
		var character, currentPosition, shiftedPosition;
		for(var i = 0; i < length; i++)
		{
			character = text.charAt(i);
			if(regexLowercase.test(character))
			{
				currentPosition = lowercase.indexOf(character);
				shiftedPosition = (currentPosition + n) % 26;
				result += lowercase.charAt(shiftedPosition);
			}
			else if(regexUppercase.test(character))
			{
				currentPosition = uppercase.indexOf(character);
				shiftedPosition = (currentPosition + n) % 26;
				result += uppercase.charAt(shiftedPosition);
			}
			else
			{
				result += character;
			}
		}
		return result;
	}
