
function all_equal(val_one, val_two, val_three){
	bool = false; 
	if (val_one == val_two && val_two == val_three){
		bool=true;
	}
	return bool; 
}

function two_are_equal(val_one, val_two, val_three){
	bool = false; 
	if (val_one == val_two || val_two == val_three || val_one == val_three){
		bool=true;
	}
	return bool;
}

function return_money(val_one, val_two, val_three, money){
	bool1 = all_equal(val_one, val_two, val_three); 
	bool2=two_are_equal(val_one, val_two, val_three); 

	if (bool1){
		money =  money*3;
	}
	if (bool2){
		money =  money*2;
	}

	if (bool1 == false && bool2 ==false){
		money =0;
	}

return money; 
}

