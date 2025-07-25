const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.filechooser,
		C3.Plugins.Text,
		C3.Plugins.Spritefont2,
		C3.Plugins.TextBox,
		C3.Plugins.Touch,
		C3.Plugins.Button,
		C3.Plugins.Mouse,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.TextBox.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Button.Cnds.OnClicked
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{FileChooser: 0},
	{Sprite4: 0},
	{rightAnswer: 0},
	{wrong2: 0},
	{wrong3: 0},
	{scoreText: 0},
	{اسکور: 0},
	{Text: 0},
	{Text2: 0},
	{SpriteFont: 0},
	{score: 0},
	{Touch: 0},
	{Sprite2: 0},
	{feedbackWrong2: 0},
	{feedbackWrong3: 0},
	{Sprite3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{rightAnswet: 0},
	{Sprite9: 0},
	{Sprite8: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{Sprite17: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Button: 0},
	{Mouse: 0},
	{Sprite23: 0},
	{Sprite24: 0},
	{Sprite25: 0},
	{wrong14: 0},
	{wrong24: 0},
	{Sprite28: 0},
	{Sprite29: 0},
	{Sprite30: 0},
	{Sprite31: 0},
	{rightAnswer4: 0},
	{Sprite33: 0},
	{Sprite34: 0},
	{Sprite35: 0},
	{wrongAnswr1yellowlevel: 0},
	{wrongAnswer1: 0},
	{rightansweryellowlevel: 0},
	{Sprite36: 0},
	{Sprite37: 0},
	{Sprite38: 0},
	{Sprite39: 0},
	{Sprite40: 0},
	{Sprite41: 0},
	{Sprite42: 0},
	{Sprite43: 0},
	{Sprite44: 0},
	{Sprite45: 0},
	{Sprite46: 0},
	{Sprite47: 0},
	{Sprite48: 0},
	{Sprite49: 0},
	{Sprite50: 0},
	{Sprite51: 0},
	{Sprite52: 0},
	{Sprite53: 0},
	{Sprite54: 0},
	{Sprite55: 0},
	{perfect4: 0},
	{Sprite57: 0},
	{Sprite58: 0},
	{Sprite59: 0},
	{Sprite60: 0},
	{right81: 0},
	{Sprite62: 0},
	{Sprite63: 0},
	{wrong141: 0},
	{wrong142: 0},
	{Sprite26: 0},
	{Sprite27: 0},
	{Sprite32: 0},
	{Sprite56: 0},
	{Sprite61: 0},
	{Sprite64: 0},
	{Sprite65: 0},
	{Sprite66: 0},
	{Sprite67: 0},
	{Sprite68: 0},
	{Sprite69: 0},
	{Sprite70: 0},
	{Sprite71: 0},
	{Sprite72: 0},
	{Sprite73: 0},
	{Sprite74: 0},
	{Sprite75: 0},
	{Sprite76: 0},
	{scoreLevel2: 0},
	{scoreLevel3: 0},
	{scoreLevel4: 0},
	{SCORELEVEL6: 0},
	{scoreLevel5: 0},
	{SCORELEVEL7: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	FileChooser: class extends self.IFileChooserInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	rightAnswer: class extends self.ISpriteInstance {},
	wrong2: class extends self.ISpriteInstance {},
	wrong3: class extends self.ISpriteInstance {},
	scoreText: class extends self.ISpriteInstance {},
	اسکور: class extends self.ITextInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	score: class extends self.ITextInputInstance {},
	Touch: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	feedbackWrong2: class extends self.ISpriteInstance {},
	feedbackWrong3: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	rightAnswet: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	Mouse: class extends self.IInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	wrong14: class extends self.ISpriteInstance {},
	wrong24: class extends self.ISpriteInstance {},
	Sprite28: class extends self.ISpriteInstance {},
	Sprite29: class extends self.ISpriteInstance {},
	Sprite30: class extends self.ISpriteInstance {},
	Sprite31: class extends self.ISpriteInstance {},
	rightAnswer4: class extends self.ISpriteInstance {},
	Sprite33: class extends self.ISpriteInstance {},
	Sprite34: class extends self.ISpriteInstance {},
	Sprite35: class extends self.ISpriteInstance {},
	wrongAnswr1yellowlevel: class extends self.ISpriteInstance {},
	wrongAnswer1: class extends self.ISpriteInstance {},
	rightansweryellowlevel: class extends self.ISpriteInstance {},
	Sprite36: class extends self.ISpriteInstance {},
	Sprite37: class extends self.ISpriteInstance {},
	Sprite38: class extends self.ISpriteInstance {},
	Sprite39: class extends self.ISpriteInstance {},
	Sprite40: class extends self.ISpriteInstance {},
	Sprite41: class extends self.ISpriteInstance {},
	Sprite42: class extends self.ISpriteInstance {},
	Sprite43: class extends self.ISpriteInstance {},
	Sprite44: class extends self.ISpriteInstance {},
	Sprite45: class extends self.ISpriteInstance {},
	Sprite46: class extends self.ISpriteInstance {},
	Sprite47: class extends self.ISpriteInstance {},
	Sprite48: class extends self.ISpriteInstance {},
	Sprite49: class extends self.ISpriteInstance {},
	Sprite50: class extends self.ISpriteInstance {},
	Sprite51: class extends self.ISpriteInstance {},
	Sprite52: class extends self.ISpriteInstance {},
	Sprite53: class extends self.ISpriteInstance {},
	Sprite54: class extends self.ISpriteInstance {},
	Sprite55: class extends self.ISpriteInstance {},
	perfect4: class extends self.ISpriteInstance {},
	Sprite57: class extends self.ISpriteInstance {},
	Sprite58: class extends self.ISpriteInstance {},
	Sprite59: class extends self.ISpriteInstance {},
	Sprite60: class extends self.ISpriteInstance {},
	right81: class extends self.ISpriteInstance {},
	Sprite62: class extends self.ISpriteInstance {},
	Sprite63: class extends self.ISpriteInstance {},
	wrong141: class extends self.ISpriteInstance {},
	wrong142: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	Sprite32: class extends self.ISpriteInstance {},
	Sprite56: class extends self.ISpriteInstance {},
	Sprite61: class extends self.ISpriteInstance {},
	Sprite64: class extends self.ISpriteInstance {},
	Sprite65: class extends self.ISpriteInstance {},
	Sprite66: class extends self.ISpriteInstance {},
	Sprite67: class extends self.ISpriteInstance {},
	Sprite68: class extends self.ISpriteInstance {},
	Sprite69: class extends self.ISpriteInstance {},
	Sprite70: class extends self.ISpriteInstance {},
	Sprite71: class extends self.ISpriteInstance {},
	Sprite72: class extends self.ISpriteInstance {},
	Sprite73: class extends self.ISpriteInstance {},
	Sprite74: class extends self.ISpriteInstance {},
	Sprite75: class extends self.ISpriteInstance {},
	Sprite76: class extends self.ISpriteInstance {}
}