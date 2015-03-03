function BlockManager(){
	this.blockmap = [];
}

BlockManager.prototype = {

	generateBlocks: function(){
			this.addToMap(block);
		}
	},

	addToMap: function(block){
		if (block && this.blockmap.indexOf(block) == -1){
			this.blockmap.push(block);
		}
	},

	removeFromMap: function(block){
		if (block && this.blockmap.indexOf(block) > -1){
			this.blockmap.slice(block, 0);
		}	
	},

	parseBlockMap: function(){
		var result,
		removeblock;
		this.blockmap.forEach(function(block,k){
					if (isColliding(block, ball)){;
						removeblock = new CustomEvent("removeblock", {"detail": {"block": block}});
						document.dispatchEvent(removeblock);
						result = true;	
					}
				}
		});
		return result;
	}
}