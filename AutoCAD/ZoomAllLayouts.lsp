;;  ZoomAllLayouts.lsp
;;  Command names:
;;    ZLAL = Zoom Limits All Layouts
;;    ZEAL = Zoom Extents All Layouts
;;    ZAAL = Zoom All All Layouts
;;  Gets into all Layouts, goes to Paper Space and Zooms to the [Limits or
;;    Extents or All] in each; ends in Model Space and likewise Zooms there.
;;  Kent Cooper, last edited 2 April 2013

(defun ZAL (zopt / zd cmde exp)
  (defun zd (); = Zoom Determination
    (cond
      ((= zopt "L") (command (getvar 'limmin) (getvar 'limmax))); use Limits
      ((= zopt "E") (command "_extents"))
        ; Uses Extents option, not EXTMIN/EXTMAX System Variables,
        ; because those do not shrink on reduction of the actual extents
        ; until the next drawing regeneration or Zoom All-or-Extents, so
        ; using them could Zoom to a larger area than the current Extents.
      ((= zopt "A") (command "_all"))
    ); cond
  ); defun
  (setq
    cmde (getvar 'cmdecho)
    exp (= (getvar 'expert) 0)
  ); setq
  (if exp (setvar 'expert 1)); suppresses "About to regen -- proceed?"
  (setvar 'cmdecho 0)
  (foreach lay (layoutlist)
    (setvar 'ctab lay)
    (command "_.pspace" "_.zoom")
    (zd)
  ); foreach
  (setvar 'ctab "Model")
  (command "_.zoom")
  (zd)
  (if exp (setvar 'expert 0)); reset if changed
  (setvar 'cmdecho cmde)
  (princ)
); defun

(defun C:ZLAL (); = Zoom Limits All Layouts
  (ZAL "L")
); defun

(defun C:ZEAL (); = Zoom Extents All Layouts
  (ZAL "E")
); defun

(defun C:ZAAL (); = Zoom All All Layouts
  (ZAL "A")
); defun