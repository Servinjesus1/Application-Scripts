// User Preferences
// These settings override Zotero's on startup.
// This is useful for transferring settings between setups
// However, each setting must be understood at the console level
// and settings cannot be updated in the UI if they are set here.

// Universal
///Better Notes
user_pref("extensions.zotero.Knowledge4Zotero.citeFormat", '{"mode":"bibliography", "contentType":"", "id":"http://www.zotero.org/styles/chicago-note-bibliography", "locale":""}');
///Zotero Tags
user_pref("extensions.zotero.zoterotag.rules", '[{"id":1, "tags":["/unread"], "untags":[], "actions":[{"event":"add", "operation":"add"}], "group":1}, {"id":2, "tags":["/unread"], "untags":[], "actions":[{"event":"open", "operation":"remove"}], "group":1}]');
///ZotFile
user_pref("extensions.zotfile.add_etal", false);
user_pref("extensions.zotfile.import", false);
user_pref("extensions.zotfile.max_authors", 1);
user_pref("extensions.zotfile.max_titlelength", 15);
user_pref("extensions.zotfile.renameFormat", "{%b-}{%1}");
user_pref("extensions.zotfile.renameFormat_patent", "");
user_pref("extensions.zotfile.replace_blanks", true);
user_pref("extensions.zotfile.source_dir_ff", false);
user_pref("extensions.zotfile.subfolder", true);
user_pref("extensions.zotfile.tablet", true);
user_pref("extensions.zotfile.tablet.storeCopyOfFile", true);
user_pref("extensions.zotfile.truncate_title", false);
user_pref("extensions.zotfile.useFileTypes", false);
user_pref("extensions.zotfile.wildcards.user", `{
	"0":{
		"field":"title",
		"operations":[{"function":"exec", "group":"1", "regex":"(^.{1, 10})"}]
	}, "1":{
		"field":"title", "operations":[{"function":"replace", "regex":"^(.{10}).*.{3}(.{14})$", "replacement":"$1..$2"}]
	}, "2":{
		"field":"title", "operations":[{"function":"exec", "group":"1", "regex":"(.{1, 14})$"}]
	}, "3":{
		"field":"accessDate", "operations":[{"function":"exec", "group":"1", "regex":"^(.{4}-.{2}).*$"}]
	}, "4":{
		"field":"itemType", "operations":[{
			"function":"replace", "replacement":"_", "regex":"\\\\s", "flags":"g"
		}]
	}
}`);
///Zutlio
user_pref("extensions.zutilo.collectionmenu.copyZoteroCollectionSelectLink", "Zutilo");
user_pref("extensions.zutilo.collectionmenu.copyZoteroCollectionURI", "Zutilo");
user_pref("extensions.zutilo.itemmenu.copyAttachmentPaths", "Zutilo");
user_pref("extensions.zutilo.itemmenu.copyJSON", "Zutilo");
user_pref("extensions.zutilo.itemmenu.copyZoteroItemURI", "Zutilo");
user_pref("extensions.zutilo.itemmenu.copyZoteroSelectLink", "Zutilo");
user_pref("extensions.zutilo.itemmenu.modifyAttachments", "Zutilo");
user_pref("extensions.zutilo.itemmenu.pasteJSONAll", "Zutilo");
user_pref("extensions.zutilo.itemmenu.pasteJSONFromNonEmptyFields", "Zutilo");
user_pref("extensions.zutilo.itemmenu.pasteJSONIntoEmptyFields", "Zutilo");
user_pref("extensions.zutilo.itemmenu.pasteJSONItemType", "Zutilo");
user_pref("extensions.zutilo.itemmenu.showAttachments", "Zotero");
///Better BibTeX
user_pref("extensions.zotero.translators.better-bibtex.autoExportDelay", 13);
user_pref("extensions.zotero.translators.better-bibtex.citekeyFold", false);
user_pref("extensions.zotero.translators.better-bibtex.citekeyFormat", "auth+year+\"-\"+journal.len('<',5).len | auth+year+\"-\"+journal.abbr.condense.len('<',8).len | auth+year+\"+\"+Publisher.abbr.len | auth+year+\"~\"+Archive.abbr.len | auth+year+\"@\"+LibraryCatalog.len |\ntype(audioRecording)+auth+year+\"=ar\"|\ntype(blogPost)+auth+year+\"=bp\"|\ntype(computerProgram)+auth+year+\"=sw\"|\ntype(conferencePaper)+auth+year+\"=cp\"|\ntype(document)+auth+year+\"=d\"|\ntype(email)+auth+year+\"=em\"|\ntype(encyclopediaArticle)+auth+year+\"=eA\"|\ninspireHep | auth+year");
user_pref("extensions.zotero.translators.better-bibtex.citekeyFormatEditing", "auth+year+\"-\"+journal.len('<',5).len | auth+year+\"-\"+journal.abbr.condense.len('<',8).len | auth+year+\"+\"+Publisher.abbr.len | auth+year+\"~\"+Archive.abbr.len | auth+year+\"@\"+LibraryCatalog.len |\ntype(audioRecording)+auth+year+\"=ar\"|\ntype(blogPost)+auth+year+\"=bp\"|\ntype(computerProgram)+auth+year+\"=sw\"|\ntype(conferencePaper)+auth+year+\"=cp\"|\ntype(document)+auth+year+\"=d\"|\ntype(email)+auth+year+\"=em\"|\ntype(encyclopediaArticle)+auth+year+\"=eA\"|\ninspireHep | auth+year");

//Platform Specific
///Mac
////Zotero
user_pref("extensions.zotero.baseAttachmentPath", "/Users/coesite/Library/CloudStorage/Dropbox/2-Life/5-Content");
////Better BibTeX
user_pref("extensions.zotero.translators.better-bibtex.baseAttachmentPath", "/Users/coesite/Library/CloudStorage/Dropbox/2-Life/5-Content");
////Zotfile
user_pref("extensions.zotfile.dest_dir", "/Users/coesite/Library/CloudStorage/Dropbox/2-Life/5-Content");
user_pref("extensions.zotfile.source_dir", "/Users/coesite/Library/CloudStorage/Dropbox/2-Life/5-Content/0In-Library");
user_pref("extensions.zotfile.tablet.dest_dir", "/Users/coesite/Library/CloudStorage/Dropbox/Computers/Mica/2-Life");
user_pref("extensions.zotfile.subfolderFormat", "%4/%a");

///Win
// ////Zotero
// user_pref("extensions.zotero.baseAttachmentPath", "C:\\Dropbox\\2-Life\\5-Content");
// ////Better BibTeX
// user_pref("extensions.zotero.translators.better-bibtex.baseAttachmentPath", "C:\\Dropbox\\2-Life\\5-Content");
// ////Zotfile
// user_pref("extensions.zotfile.dest_dir", "C:\\Dropbox\\2-Life\\5-Content");
// user_pref("extensions.zotfile.source_dir", "C:\\Dropbox\\2-Life\\5-Content\\0In-Library");
// user_pref("extensions.zotfile.tablet.dest_dir", "C:\\Dropbox\\Computers\\Mica\\2-Life");
// user_pref("extensions.zotfile.subfolderFormat", "%4\\%a");

//Repository Specific
///Physics
////Mac
/////Zotero
user_pref("extensions.zotero.dataDir", "/Users/coesite/Zotero-Life");
/////Better Notes
////Win
// user_pref("extensions.zotero.dataDir", "C:\\Users\\spenc\\Zotero-Life");